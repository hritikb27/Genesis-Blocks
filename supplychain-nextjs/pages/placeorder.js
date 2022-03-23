import { useContext, useEffect, useState } from "react"
import useSWR from "swr";
import AppContext from "../components/AppContext"
import bigNumber from "big-number";

export default function PlaceOrder() {
    const {supplyContract, currentAddress, users} = useContext(AppContext);
    const [state, setState] = useState([])
    let userProds = [];

    // const fetcher = ()=>{
        
    //     return userProds;
    // }
    
    // const {data, error} = useSWR('getSupplyContractData', fetcher);


    useEffect(()=>{

        // async function userData(){
        //     console.log(users)
        //     const getOneUserData = await supplyContract.getStock(users[2].userId);
        //     userProds.push(getOneUserData)
        //     console.log(userProds[0][0][2]);
        //     setState(prev=>!prev)
        // }
        users.map(async(user)=>{
            if(user.userAddress==currentAddress){
                console.warn('You are the user', user.userAddress);
                return;
            }
        //     
            const userdata = await supplyContract.getStock(user.userId)
            if(userdata.includes(Object)){
                console.log('Object Found')
            }

            const StringObj = userdata.map(data=>{
                console.log('String DATA',data);
                return data.map(item=>{
                    console.log('String ITEM', String(item))
                    return String(item)
                });
            })
            console.log('StringObj', StringObj)
            setState(prev=>[...prev, StringObj])
        //         
            
            
        })

        // userData();
    },[])
    
    return (
        <div className="w-full flex mt-6 text-white">
            <div className='flex flex-col justify-center items-center w-full'>
                <h1>Available Products:</h1>
                <div className="w-[90%] mt-6 flex justify-center flex-wrap flex gap-4">
                    {state.length>=1 && state.map(user=>{
                        return user.map(item=>{
                            return <div key={item} className='bg-gray-500 w-[15%] h-[250px] rounded-lg text-xl flex flex-col justify-center items-between'>
                                <table className="text-center flex flex-col gap-4 items-center">
                                <tr>{item[2]}</tr>
                                <tr>${item[3]}</tr>
                                <tr>{item[5]}</tr>
                                <button className="w-[50%] h-[30px] rounded-md bg-red-500">Order</button>
                                </table>
                                <br/>
                            </div>
                            // return item.map(item2=>{
                            //     return <h1 key={item2}>{item2}</h1>
                                
                            // })
                            
                        })
                    })}
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

export async function getServerSideProps(){

    return{
        props:{

        }
    }
}