import Link from 'next/link'
import { useState } from 'react'

export default function StartChain() {
    const [formData, setFormData] = useState({itemName:'',cost:2,retail:true,location:''});

    function formChangeHandle(newItemName, newItemValue){
        console.log(newItemValue)
        setFormData((prevState)=>{
            console.log(prevState)
            return {...prevState, [newItemName]: newItemValue}
        })
    }

    function sendNodeData(){
        addStartingNode()
    }

    return (
        <div className="w-full flex mt-6">
            <div className='flex flex-col justify-center items-center w-full'>
                <h1>Enter Product Details</h1>
                <div className="w-[60%] sm:w-[40%] lg:w-[20%] mt-6 flex flex-col gap-4">
                    <div className="flex items-center w-full justify-between">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Item Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="item-name"
                                id="item"
                                value={formData.itemName}
                                onChange={(e)=> formChangeHandle('itemName',e.target.value)}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                                placeholder="Tomatoes"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-full justify-between">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Cost
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="cost"
                                id="cost"
                                value={formData.cost}
                                onChange={(e)=> formChangeHandle('cost',e.target.value)}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                                placeholder="$2.5"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-full justify-between">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 w-[50%] ">
                            Is it Retail?
                        </label>
                        <div className="w-[49%] mt-1">
                            <select
                                id="isretail"
                                name="isretail"
                                className="mt-1 block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                defaultValue={formData.retail}
                                onChange={(e)=>formChangeHandle('retail',e.target.value)}
                            >
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex items-center w-full justify-between">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Location:
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="item-name"
                                id="item"
                                value={formData.location}
                                onChange={(e)=> formChangeHandle('location',e.target.value)}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                                placeholder="New Delhi"
                            />
                        </div>
                    </div>
                </div>
                <div className='ml-4 flex justify-start w-[10%]'>
                    <button
                        type="button"
                        className="inline-flex w-[6vw] md:w-[8vw] h-[41px] mr-4 mt-6 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={sendNodeData}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}