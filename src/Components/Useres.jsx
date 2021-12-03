import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const fetchUsers = () => {
  return axios.get("https://reqres.in/api/users")
}
export default function Useres() {
  const [data, setData] = React.useState(null)
  const [isloading, setIsloading] = React.useState(true)
  const handleFetchUsers = async () => {
    try {
      setIsloading(true)
      const { data } = await fetchUsers()
      setData(data)
    } catch (err) {
      console.log(err)
    }
    setIsloading(false)
  }
  React.useEffect(() => {
    handleFetchUsers()
  }, [])
  if (isloading) {
    return <div>....loading</div>
  }
  return (
    <div>
      <h2>Users</h2>
      <div>
        {data?.data?.map(items => (
          <div key={items.id}>
            <div>{`${items.first_name} ${items.last_name}`}</div>
            <img src={items.avatar} alt={items.first_name} />
            <Link to={`/users/${items.id}`}>Show More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
