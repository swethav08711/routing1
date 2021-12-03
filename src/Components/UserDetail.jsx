import React from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import UserCard from "./UserCard"
const getUserId = id => {
  return axios.get("https://reqres.in/api/users/" + id)
}
export default function UserDetail() {
  const { id } = useParams()
  const [isLoading, setIsloading] = React.useState(true)
  const [data, setData] = React.useState(null)

  const handleGetuser = async () => {
    try {
      setIsloading(true)
      const { data } = await getUserId(id)
      setData(data)
      setIsloading(false)
    } catch (err) {
      console.log(err)
    }
  }
  React.useEffect(() => {
    handleGetuser()
  }, [id])
  if (isLoading) return <div>...loading</div>
  return (
    <div>
      <h3>User ID {id}</h3>
      <UserCard
        id={id}
        name={`${data?.data?.first_name} ${data?.data?.last_name}`}
        avatar={data?.data?.avatar}
        email={data?.data?.email}
      />
      {id !== "1" && <Link to={`/users/${Number(id) - 1}`}>Prev</Link>}
      <Link to={`/users/${Number(id) + 1}`}>Next</Link>
    </div>
  )
}
