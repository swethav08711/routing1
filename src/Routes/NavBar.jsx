import React from "react"
import { Link } from "react-router-dom"
const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/users",
    title: "Users",
  },
]
export default function NavBar() {
  return (
    <>
      {links.map(({ to, title }) => (
        <Link to={to}>{title}</Link>
      ))}
    </>
  )
}
