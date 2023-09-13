import { Modal } from "@components/common";
import { Description, GameHero, Keypoints } from "@components/game";
import { BaseLayout } from "@components/layout";
import { getAllGames } from "@content/blockchaingames/fetcher";




export default function Game({game}) {

   
  
    return (
      <>
      {game.title}
      <div className="py-4">
        <GameHero />
      </div>
        <Keypoints />
        <Description />
        <Modal />
      </>
    )
  }

 export function getStaticPaths() {
  const { data } = getAllGames()


  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug
      }
    })),
    fallback: false
  }
 } 

 export function getStaticProps({params}) {
  const { data } = getAllGames()
  const game = data.filter(c => c.slug === params.slug)[0]

  return {
    props: {
      game
    }
  }
}


Game.Layout = BaseLayout