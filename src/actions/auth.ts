'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

export const onAuthenticatedUser = async() => {
    try {
        const clerk = await currentUser()
        if(!clerk) return {
            status: 404,
            message: "Clerk User not found"
        }

        const user = await client.user.findUnique({
            where: {
                clerkId: clerk.id
            },
            select: {
                id: true,
                firstname: true,
                lastname: true
            }
        })
        if(user) return {
            status: 200,
            id: user.id,
            image: clerk.imageUrl,
            username: `${user.firstname} ${user.lastname}`,
        }

        return {
            status: 404,
            message: "User not found"
        }
    } catch (error) {
        return {
            status: 404,
            message: "User not found"
        }
    }
}