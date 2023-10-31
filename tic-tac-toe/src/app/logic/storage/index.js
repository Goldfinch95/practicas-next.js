export const saveGameToStorage = ({board, turn})=>{
    //guardar partida
    //EL LOCAL STORAGE SOLO ALMACENA STRINGS!!!
    window.localStorage.setItem('board',JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}
//resetear la memoria del juego
export const resetGameStorage = ()=> {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}