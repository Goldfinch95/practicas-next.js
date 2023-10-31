"use client"

import { useState } from 'react'
import confetti from 'canvas-confetti'
import Image from 'next/image'
import styles from './page.module.css'
import Square from '@/components/Square'
import { Board } from '@/components/Board'
import { PLAYERS } from './arrays'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from '@/components/WinnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

export default function Home() {
  //tablero
  const [board, setBoard ] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  //la x empieza el turno
  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? PLAYERS.X
  })
  //declarar ganador, null no hay ganador, false hay empate.
  const [winner, setWinner] = useState(null)
  

 //reiniciar el juego, reseteando el estado.
 const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(PLAYERS.X)
  setWinner(null)
  resetGameStorage()
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
    //guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className='game'>
        <Board board={board} updateBoard={updateBoard}/>
      </section>

      <section className='turn'>
        <Square isSelected ={turn == PLAYERS.X}>{PLAYERS.X}</Square>
        <Square isSelected ={turn == PLAYERS.O}>{PLAYERS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}
