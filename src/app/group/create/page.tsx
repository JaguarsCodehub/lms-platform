import { onAuthenticatedUser } from "@/actions/auth"
import { onGetAffiliateInfo } from "@/actions/groups"
import { redirect } from "next/navigation"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: {
        [affiliate: string]: string
    }
}) => {
    const user = await onAuthenticatedUser()

    const affiliate = await onGetAffiliateInfo(searchParams.affiliate)

    if (!user || !user.id) redirect("/sign-in")

    return (
        <>
            <div className="px-7 flex flex-col">
                <h5 className="font-bold text-base text-themeTextWhite">
                    Payment Method
                </h5>
                <p className="text-themeTextGray leading-tight">
                    Free for 14 days, then $99/month. Cancel anytime.All
                    features. Unlimited everything. No hidden fees.
                </p>
            </div>
        </>
    )
}

export default GroupCreatePage
