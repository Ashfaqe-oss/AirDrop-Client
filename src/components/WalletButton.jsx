import React, {useEffect, useState} from 'react'
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
import styles from '../styles';
import {Link} from "react-router-dom";


function walletButton() {
    const [accountAddress, setAccountAddress] = useState('');
    const {ens} = useLookupAddress();
    const {account, activateBrowserWallet, deactivate } = useEthers();

    useEffect(() => {
        if(ens) {
            setAccountAddress(ens)
            console.log(accountAddress)
        } else if(account) {
            setAccountAddress(shortenAddress(account))
            console.log(accountAddress)
        } else {
            setAccountAddress("")
        }
    }, [account, ens, setAccountAddress])
  return (
    <div>
        <Link to="/Ardp">
        <button className={`bg-[#2952e3] mr-5 font-mono hover:bg-[#1941d3]` + styles.walletButton}>
            Airdrop
        </button>
        </Link>
        <button onClick={() => {
            if(!account) {
                activateBrowserWallet()
            } else {
                deactivate()
            }
        }} className={`bg-pink-500` + styles.walletButton}>
            {accountAddress || "Connect"}
        </button>
    </div>
  )
}

export default walletButton