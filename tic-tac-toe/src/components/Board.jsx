import Square from "./Square"
//se renderiza una lista de elementos con map
//tablero
export function Board ({board, updateBoard}){
    return(
        board.map((square,index)=>{
            return (
              <Square className='cell'
              key={index}
              index={index}
              updateBoard={updateBoard}>
                <span className='cell__content'>
                  {square}
                </span>
              </Square>
            )
          }
          )
    )
}