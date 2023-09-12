import { Modal } from "@components/common";
import { Content, GameHero, Keypoints } from "@components/game";
import { BaseLayout } from "@components/layout";




export default function Game() {

   
  
    return (
      <>
      <div className="py-4">
        <GameHero />
      </div>
        <Keypoints />
        <Content />
        <Modal />
      </>
    )
  }

Game.Layout = BaseLayout