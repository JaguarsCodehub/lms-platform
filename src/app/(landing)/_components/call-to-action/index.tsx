import GradientText from "@/components/global/gradient-text"
import { Button } from '@/components/ui/button'
import { BadgePlus } from '@/icons'
import Link from 'next/link'

type Props = {}

const CallToAction = (props: Props) => {
    return (
        <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
            <GradientText
                className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
                element="H1"
            >
                Bringing Communities <br className="md:hidden" /> Together
            </GradientText>
            <p className="text-sm md:text-center text-left text-muted-foreground">
                Grouple is a vibrant online community platformt hat empowers{" "}
                <br className="md:hidden" />
                people to connect, <br className='hidden md:block'/>{" "}
                <br className='md:hidden'/>
                relationships
            </p>
            <div className='flex md:flex-row flex-col gap-5 md:justify-center md:mt-5 w-full'>
                <Button variant={"outline"} className='rounded-xl bg-transparent text-base'>
                    Watch demo
                </Button>
                <Link href='/sign-in'>
                    <Button className="rounded-xl flex gap-2 w-full">
                        <BadgePlus />
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction
