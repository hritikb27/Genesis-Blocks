export default function PlaceOrder() {

    return (
        <div className="w-full flex mt-6">
            <div className='flex flex-col justify-center items-center w-full'>
                <h1>Available Products:</h1>
                <div className="w-[20%] mt-6 flex flex-col gap-4">
                    
                </div>
                <div className='ml-4 flex justify-start w-[10%]'>
                    <button
                        type="button"
                        className="inline-flex w-[6vw] h-[41px] mr-4 mt-6 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    )
}