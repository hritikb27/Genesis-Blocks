import Link from 'next/link'
import bgVideo from '../assets/pexels-rostislav-uzunov-5453622.mp4'

export default function HomePage() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <video className='fixed z-[-1] w-full h-full' autoPlay muted loop>
        <source src={bgVideo} type='video/mp4' />
      </video>

      <Link href="/dashboard">
        <button
          type="button"
          className="inline-flex w-[6vw] md:w-[8vw] h-[41px] mr-4 mt-6 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

        >
          Connect Wallet
        </button>
      </Link>

      
    </div>
  )
}