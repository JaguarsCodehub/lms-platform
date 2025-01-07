"use client"

import { useAuthSignIn } from '@/hooks/authentication'

type Props = {}

const SignInForm = (props: Props) => {

    const {isPending, onAuthenticatedUser, register, errors} = useAuthSignIn()
    return (
        <form onSubmit={onAuthenticatedUser} className='flex flex-col gap-3 mt-10'>
            
        </form>
    )
}

export default SignInForm
