import Link from 'next/link'

export default function HomePage() {

  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <video className='fixed z-[1] w-full h-full' autoPlay muted loop>
        <source src="/pexels-rostislav-uzunov-5453622.mp4" type='video/mp4'/>
      </video>

      <Link href="/dashboard">
        <button
          type="button"
          className="inline-flex z-[2] w-[6vw] md:w-[8vw] h-[41px] mr-4 mt-6 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-[#d70a84] bg-white hover:text-white hover:bg-[#d70a84] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"

        >
          Connect Wallet
        </button>
      </Link>

      
    </div>
  )
}