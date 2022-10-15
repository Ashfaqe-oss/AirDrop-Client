import React, {useState} from 'react'
// import {Contract} from './../../contracts/src'
// import {abis} from "./../../contracts/src"
import {ERC20, useContractFunction, useEthers, useTokenAllowance, useTokenBalance} from '@usedapp/core';
import {ethers} from 'ethers'
import {parseUtils} from 'ethers/lib/utils'

import { ROUTER_ADDRESS } from '../config'

function Exchange() {
  return (
    <div className='text-white'>Exchange</div>
  )
}

export default Exchange