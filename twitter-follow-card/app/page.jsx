"use client"

import TwitterFollowCard from "./components/TwitterFollowCard.jsx"

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true
  },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: true
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false
  }
]
export default function Home() {
  return (
    <>
    <title>Twitter Card</title>
    <section className="App">
      {/*la key debe ser un dato unico que no se repita*/}
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        )
        )
      }    
    </section>
    </>
  )
}
