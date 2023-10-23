import { useState } from "react"
//se pueden dar valores por defecto a las props.
export default function TwitterFollowCard({userName = 'unknown', children, initialIsFollowing}) {
  //el valor por defecto del estado es false, porque el valor inicial no se ha modificado todavia.
  //primera posicion es el valor del estado, en la segundo posicion es una funcion que actualiza al estado.
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
//funcion que modifica el estado
const handleClick = () => {
  setIsFollowing(!isFollowing)
}
//ternarios
  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    return (
      <>
      <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar" 
        alt="El avatar de midudev" 
        src={`https://unavatar.io/${userName}`}></img>
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followcard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>

      </aside>
    </article>
      </>
    )
  }