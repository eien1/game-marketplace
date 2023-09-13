import { Hero, Breadcrumbs } from "@components/common"
import { GameList } from "@components/game"
import { BaseLayout } from "@components/layout"
import { getAllGames } from "@content/blockchaingames/fetcher"


export default function Home({blockchaingames}) {
  return (
    <>
      <Hero />
      <GameList
        blockchaingames={blockchaingames}
      />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllGames()
  return {
    props: {
      blockchaingames: data
    }
  }
}

Home.Layout = BaseLayout