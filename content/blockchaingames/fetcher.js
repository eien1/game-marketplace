import blockchaingames from "./index.json"

export const getAllGames = () => {

    return {
        data: blockchaingames, 
        gameMap: blockchaingames.reduce((a, c, i) => {
            a[c.id] = c
            a[c.id].index = i
            return a
        }, {})
    }
}