import { WINNER_COMBOS } from "../arrays"

//comprabar ganador
export const checkWinnerFrom = (boardToCheck)=>{
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] == boardToCheck[b] &&  // 0 Y 1 -> X -> X u O -> O
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a] // ganador X u O
      }
    }
    //si no hay ganador
    return null
  }
//revisamos si hay empate, si no hay mas espacios vacios en el tablero.
  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
   }