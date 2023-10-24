"use client"

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Square from '@/components/Square'
//juagadores
const PLAYERS = {
  X: "X",
  O: "O"
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


export default function Home() {
  //tablero
  const [board, setBoard ] = useState(Array(9).fill(null))
  //la x empieza el turno
  const [turn, setTurn] = useState(PLAYERS.X)
  //declarar ganador, null no hay ganador, false hay empate.
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck)=>{
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] == boardToCheck[b] &&  // 0 Y 3 -> X -> X u O -> O
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a] // ganador X u O
      }
    }
    //si no hay ganador
    return null
  }
  //actualizar el turno
  const updateBoard = (index) =>{
    //no actualizamos esta posicion, si ya tiene algo o ya hay un ganador
    if(board[index] || winner) return
    //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn == PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setTurn(newTurn)
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
      alert(`El ganador es ${newWinner}`)
    }
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {/*se renderiza una lista de elementos*/}
        {board.map((square,index)=>{
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
        })}
      </section>

      <section className='turn'>
        <Square isSelected ={turn == PLAYERS.X}>{PLAYERS.X}</Square>
        <Square isSelected ={turn == PLAYERS.O}>{PLAYERS.O}</Square>
      </section>
    </main>
  )
}