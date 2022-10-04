import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Httpsbitcoonio from "./components/Httpsbitcoonio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|https-bitcoon-io)">
          <Httpsbitcoonio {...httpsbitcoonioData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame1Data = {
    children: "1",
};

const frame2Data = {
    children: "2",
};

const frame3Data = {
    children: "3",
};

const frame4Data = {
    children: "4",
};

const httpsbitcoonioData = {
    rectangle1: "/img/rectangle-16@2x.png",
    rectangle2: "/img/rectangle-17@2x.png",
    aDecentralizedMeme: "A Decentralized Meme Token that is backed by Bitcoin",
    coonCoonswapBa: "COON - CoonSwap - Backed by wBTC - Reward System - Community DAO - Pet Coon NFTS - And More!",
    howToBuy1: "How to Buy",
    readCoonpaper: "Read CoonPaper",
    ecosystem: "Ecosystem",
    buy: "Buy",
    coonswap1: "CoonSwap",
    roadmap: "Roadmap",
    petCoon: "Pet Coon",
    community1: "Community",
    en: "EN",
    rectangle3: "/img/rectangle-18@2x.png",
    rectangle4: "/img/rectangle-19@2x.png",
    useCoonswap1: "Use CoonSwap",
    bitcoon: " Bitcoon",
    coonLogo: "/img/coon-logo@2x.png",
    ourProjectEcosystem: "Our Project & Ecosystem",
    spanText1: "We are building a community-driven project, platform, and ecosystem based around a decentralized meme token that is fully backed by Bitcoin. Initially built on the Ethereum network, we are confident ",
    spanText2: "Bitcoon",
    spanText3: " will continue to grow and thrive due to its safety net of being backed by Bitcoin.",
    rectangle5: "/img/rectangle-5@2x.png",
    rectangle6: "/img/rectangle-6@2x.png",
    developedOnEthereum: "Developed on Ethereum",
    fullyBackedByBitcoin: "Fully Backed by Bitcoin",
    builtForTheCommunity: "Built for the Community",
    overlapGroup: "/img/rectangle-13@1x.png",
    untitleddesign161: "/img/untitleddesign16-1@1x.png",
    rectangle7: "/img/rectangle-6@2x.png",
    coon: "COON",
    rectangle8: "/img/rectangle-15@2x.png",
    seeLiveCharts: "See Live Charts",
    spanText4: "The ",
    spanText5: "Bitcoon",
    spanText6: " token is our native currency that allows investors to hold a mass amount in their wallets. Being fully backed by Bitcoin and having legitimate utility, ",
    spanText7: "COON",
    spanText8: " will continuously grow just as Bitcoin does. COON is a mintable and burnable token, which primarily benefits circulating supply, market cap, and value to investors. COON can be bought, sold, traded, and invested in the CoonSwap, our proprietary decentralized hub.",
    buyCoon1: "Buy COON",
    howToBuy2: "How to Buy",
    spanText9: "COON is best to be purchased and sold through ",
    spanText10: "CoonSwap",
    spanText11: <React.Fragment>, but can also be found on Uniswap and an ever-growing list of centralized exchanges. You will need to have wBTC in your wallet and ETH for gas. <br /><br />Please note that, outside of CoonSwap, exchanges which support one may not support the other. COON is a decentralized experiment and, as such, we always incentivize the use of decentralized exchanges. If you choose to utilize a centralized exchange instead, remember to research it first to ensure it is both safe and secure.</React.Fragment>,
    buyCoon2: "Buy COON",
    rectangle9: "/img/rectangle-11@2x.png",
    rectangle10: "/img/rectangle-12@2x.png",
    quickStartGuide: "Quick Start Guide",
    createMetamaskWallet: "Create MetaMask Wallet",
    createAMetamaskWa: "Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive COON and wBTC.",
    sendEthToYourWallet: "Send ETH to your wallet",
    youCanBuyEthereum: "You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.",
    connectYourWalletToCoonswap: "Connect your wallet to CoonSwap",
    accessYourWalletT: "Access your wallet to CoonSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.",
    swapWbtcForCoon: "Swap wBTC for COON",
    youCanStartSwappi: "You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.",
    followTheCoonTracks: "Follow the Coon Tracks",
    spanText12: "The official ",
    spanText13: "Bitcoon",
    spanText14: <React.Fragment> roadmap showcasing our early stage project, platform, and ecosystem development.<br /></React.Fragment>,
    spanText15: "*Phases are subject to change based on how fast we develop*",
    untitledDesign2161: "/img/untitled-design-21--6@2x.png",
    untitledDesign21141: "/img/untitled-design-21--6@2x.png",
    untitledDesign2162: "/img/untitled-design-21--6@2x.png",
    untitledDesign21142: "/img/untitled-design-21--6@2x.png",
    untitledDesign2163: "/img/untitled-design-21--6@2x.png",
    untitledDesign21143: "/img/untitled-design-21--6@2x.png",
    untitledDesign2164: "/img/untitled-design-21--6@2x.png",
    untitledDesign21144: "/img/untitled-design-21--6@2x.png",
    launchWebPresaleAudit: <React.Fragment>Launch Web<br />Presale<br />Audit</React.Fragment>,
    launchCoonswapStak: <React.Fragment>Launch CoonSwap<br />Staking is Live<br />Farm is Live</React.Fragment>,
    launchNftCollectio: <React.Fragment>Launch NFT Collection<br />DAO is Live<br />Our First Burn</React.Fragment>,
    phase1: "Phase 1",
    phase2: "Phase 2",
    phase3: "Phase 3",
    community2: "Community",
    spanText16: "If you'd like to donate to the ",
    spanText17: "TEAM ",
    spanText18: "-",
    spanText19: " Send ",
    spanText20: "ETH",
    spanText21: ", ",
    spanText22: "wBTC",
    spanText23: " or ",
    spanText24: "COON",
    spanText25: " here. We appreciate your support!",
    iconCopy: "/img/rectangle-7@2x.png",
    copyToClipboard: "Copy to Clipboard",
    x0X3F7F0Fa064Ca7E7Fa8: "0x3f7F0fA064ca7e7FA846025972710B4B7b4d9851",
    mintAPetCoon: "Mint a Pet Coon",
    peopleUnderestimate: "People underestimate the racoon and their incredible survival instincts. The racoon is a very intelligent and adorable animal that have a tendency of being mans’ bestfriend. From the wilderness, to the farm, inside your home, and now safely in your wallet; Our community will be able to mint their very own pet Coon NFT. There will be utility and rewards for owning a pet Coon NFT, so stay tuned for more announcements.",
    learnMore: "Learn More",
    rectangle11: "/img/rectangle-8@1x.png",
    rectangle12: "/img/rectangle-9@2x.png",
    useCoonswap2: "Use CoonSwap",
    coonswap2: "CoonSwap",
    iconEye: "/img/rectangle-10@2x.png",
    auditReport: "Audit Report",
    spanText26: "COON is the infastructure of ",
    spanText27: "CoonSwap",
    spanText28: <React.Fragment>, our proprietary decentralized hub. CoonSwap gives users the ability to:<br /></React.Fragment>,
    spanText29: "POOL",
    spanText30: <React.Fragment> (Provide Liquidity) <br /></React.Fragment>,
    spanText31: "SWAP",
    spanText32: <React.Fragment> (Buy/Sell Tokens) <br /></React.Fragment>,
    spanText33: "STAKE",
    spanText34: <React.Fragment> (Stake COON)<br /></React.Fragment>,
    spanText35: "FARM",
    spanText36: <React.Fragment> (Stake Liquidity Pool Tokens) <br />CoonSwap will also be developing a  </React.Fragment>,
    spanText37: "DAO",
    spanText38: " to allow our community to use COON for voting, and ",
    spanText39: "NFTS ",
    spanText40: "for our community to mint their own pet Coon.",
    untitledDesign231: "/img/untitled-design-23--1@1x.png",
    ourCommunityGrows: <React.Fragment>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date <br />and accurate COON information.</React.Fragment>,
    rectangle13: "/img/rectangle@2x.png",
    telegram: "Telegram",
    iconTwitter: "/img/rectangle-1@2x.png",
    twitter: "Twitter",
    rectangle14: "/img/rectangle-2@2x.png",
    reddit: "Reddit",
    rectangle15: "/img/rectangle-3@2x.png",
    discord: "Discord",
    iconInstagram: "/img/rectangle-4@2x.png",
    instagram: "Instagram",
    medium: "Medium",
    etherscan: "Etherscan",
    coinmarketcap: "CoinMarketCap",
    coingecko: "CoinGecko",
    frame1Props: frame1Data,
    frame2Props: frame2Data,
    frame3Props: frame3Data,
    frame4Props: frame4Data,
};

