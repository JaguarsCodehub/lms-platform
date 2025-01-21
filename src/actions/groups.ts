"use server"
import { client } from "@/lib/prisma"

export const onGetAffiliateInfo = async (id: string) => {
    try {
        const affiliateInfo = await client.affiliate.findUnique({
            where: {
                id,
            },
            select: {
                Group: {
                    select: {
                        User: {
                            select: {
                                firstname: true,
                                lastname: true,
                                image: true,
                                id: true,
                                stripeId: true,
                            },
                        },
                    },
                },
            },
        })

        if (affiliateInfo) {
            return { status: 200, user: affiliateInfo }
        }
        return { status: 404, message: "Affiliate not found" }
    } catch (error) {
        return { status: 400, message: "Affiliate action not working" }
    }
}
