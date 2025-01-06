import { Separator } from '@/components/ui/separator'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <>
        <h5 className='font-bold text-base text-themeTextWhite'>Login</h5>
        <p className='text-themeTextGray leading-tight'>
            Network with people from around the world, join groups, create your own, watch courses and become the best version of yourself
        </p>
        {/* <SignInForm /> */}
        <div className='my-10 w-full relative'>
            <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-themeBlack px-2 text-themeTextWhite'>
                    Or continue with
                </span>
            </div>
            <Separator orientation='horizontal' className='bg-themeGray'/>
        </div>
        {/* <GoogleAuthButton method="signin"/> */}
    </> 
  )
}

export default SignInPage