"use client"

import { FormGenerator } from "@/components/global/form-generator"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useAuthSignIn } from "@/hooks/authentication"

type Props = {}

const SignInForm = (props: Props) => {
    const { isPending, onAuthenticatedUser, register, errors } = useAuthSignIn()
    return (
        <form
            onSubmit={onAuthenticatedUser}
            className="flex flex-col gap-3 mt-10"
        >
            {GROUPLE_CONSTANTS.signInForm.map((field) => (
                <FormGenerator
                    {...field}
                    register={register}
                    errors={errors}
                    key={field.id}
                />
            ))}
            <Button type="submit" className="rounded-2xl">
                <Loader loading={isPending}>Sign in with Email</Loader>
            </Button>
        </form>
    )
}

export default SignInForm
