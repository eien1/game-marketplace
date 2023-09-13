import { Modal } from "@components/common";
import { Description, GameHero, Keypoints } from "@components/game";
import { BaseLayout } from "@components/layout";




export default function Game() {

   
  
    return (
      <>
      <div className="py-4">
        <GameHero />
      </div>
        <Keypoints />
        <Description />
        <Modal />
      </>
    )
  }

Game.Layout = BaseLayout