import Router from 'next/router'
import { ethers } from "ethers";
import AbiJson from "../components/ABI.json"
import { useState, useEffect, useContext } from 'react';
import AppContext from '../components/AppContext';

export default function HomePage() {
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [buttonText, setButtonText] = useState('')
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState('')
  const {provider, setProvider,setSupplyContract,setUserID, setCurrentAddress,setUsers} = useContext(AppContext);

  const initialize = () => {
    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
      //Have to check the ethereum binding on the window object to see if it's installed
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };

    //------Inserted Code------\\
    const MetaMaskClientCheck = () => {
      //Now we check to see if MetaMask is installed
      if (!isMetaMaskInstalled()) {
        //If it isn't installed we ask the user to click to install it
        setIsMetaMaskInstalled(false);
        setButtonText('Click to install MetaMask!');
      } else {
        //If it is installed we change our button text
        setIsMetaMaskInstalled(true);
        setButtonText('Connect');
      }
    };
    MetaMaskClientCheck();
  };

  useEffect(() => {
    initialize();
  }, [])

  const metaMaskConnect = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts) {
        const Supplyaddress = "0x8b085d43cad1a8c82696e46a075e9cc450cc8c36";
        const signer = provider.getSigner();
        const currentAddress = await signer.getAddress();
        setCurrentAddress(currentAddress);
        const abi = AbiJson.output.abi;
        const SupplyContract = new ethers.Contract(Supplyaddress, abi, signer);
        setSupplyContract(SupplyContract);
        const users = await SupplyContract.getUsers();
        setUsers(users)
        const userID = await SupplyContract.getIdfromAddress(currentAddress);
        const userIdInt = userID.toNumber();
        setUserID(userIdInt);

        let isUserFound = false;

        async function checkUser() {
          users.map(async (user) => {
            if (user.userAddress === currentAddress) {
              isUserFound = true;
              alert('User already exists')
              const userData = await SupplyContract.getuserMetadata(userIdInt);
              Router.push('/dashboard')
            }
          })

          if (!isUserFound) {
            const userName = prompt("Enter a username: ")
            console.log(userName, currentAddress);
            const userID = await SupplyContract.addNewUser(userName, currentAddress);
            const confirmTransaction = await userID.wait(2)
            if(confirmTransaction){
              console.log(confirmTransaction)
              Router.push('/dashboard')
            }
          }
        }
        checkUser();
      }
    }
    catch (error) {
      console.log('error', error);
      return error
    }
  }

  const signTransaction = async () => {
    setWalletConnecting(true)



    return checkUser();
  }

  const checkWalletConnection = async () => {
    const isWalletConnected = await metaMaskConnect();

    console.log(isWalletConnected)
  }

  const installMetamask = () => {
    window.open('https://metamask.io/download/', '_ blank');
  }


  return (
    <div>
      <h1 className='text-white text-center text-xl font-semi-bold pt-12'>Welcome to the Decentralized Supply Chain!</h1>
      <div className=' w-full h-full flex justify-center items-center'>

        <button
          type="button"
          className="inline-flex w-[10vw]  md:w-[8vw] h-[45px] mr-4 mt-6 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-[#d70a84] bg-white hover:text-white hover:bg-[#d70a84] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={isMetaMaskInstalled ? checkWalletConnection : installMetamask}
          disabled={walletConnecting}
        >
          {buttonText}
        </button>



      </div>
    </div>
  )
}