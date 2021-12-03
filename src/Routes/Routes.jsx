import React from "react"
import { Route } from "react-router-dom"
import About from "../Components/About"
import Home from "../Components/Home"
import UserDetail from "../Components/UserDetail"
import Useres from "../Components/Useres"

import NavBar from "./NavBar"

export default function ReactRouter1() {
  return (
    <>
      <NavBar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/users" exact>
        <Useres />
      </Route>
      <Route path="/users/:id" exact>
        <UserDetail />
      </Route>
    </>
  )
}
