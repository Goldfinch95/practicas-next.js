export default function Square({children, isSelected, updateBoard, index}) {
    
//para saber quien juega, utilizamos un ternario.
    const className = `square ${isSelected ? 'is-selected' : ''}`

    
//al hacer click actualiza el cuadrado
    const handleClick = () =>{
        updateBoard(index)
    }
    return (
    <div onClick={handleClick} className={className}>
        {children}
    </div>
    )
  }
