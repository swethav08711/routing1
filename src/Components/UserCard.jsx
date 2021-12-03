import React from "react"

export default function UserCard({ id, email, name, avatar }) {
  return (
    <div>
      <img src={avatar} alt={id} />
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  )
}
