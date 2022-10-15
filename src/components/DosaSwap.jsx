import React from "react";
import styles from "../styles";
import { uniswapLogo } from "../assets";
import { useEthers } from "@usedapp/core";
import WalletButton from "./WalletButton";
import Exchange from "./Exchange";
import Loader from "./Loader";
import {usePools} from '../hooks';

export default function DosaSwap() {
  const { account } = useEthers();
  const poolsLoading = usePools;
  return (
    // <div className="ml-5  flex flex-col flex-1 items-center justify-center m-7 p-5 mt-0 h-screen">
    //   <h3 className="mt-2 font-mono text-zinc-200 text-xl">DosaSwap</h3>
    // </div>
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap Logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>DosaSwap 1.0</h1>
          <p className={styles.subTitle}>Exchange tokens</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox + `gradient-border p-2`}>
              <div className="pink_gradient p-1 bg-gradient-to-r from-blue-200 to-pink-400"></div>
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, pls wait !"/>
                  ) : (
                    <Exchange />
                  )
                ) : (
                  <Loader title="Please connect your wallet ."/>
                )}
              </div>
              <div className="blue_gradient p-1 bg-gradient-to-r from-pink-200 to-blue-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
