import { Hero, Breadcrumbs } from "@components/common"
import { GameList } from "@components/game"
import { BaseLayout } from "@components/layout"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"


export default function Home() {
    return (
     <>
          <Hero />      
          <Breadcrumbs />
          <EthRates />
          <WalletBar />
          <OrderCard />
          <GameList />  
    </>
    )
  }

Home.Layout = BaseLayout