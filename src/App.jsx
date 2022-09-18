import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserForm from './componentes/UserForm'
import List from './componentes/List'
import axios from 'axios'
import swal from 'sweetalert'



function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
  }, []);
  console.log(users)

  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
      .catch(error => { console.log(error.response) })
  }
  const selectUser = (user) => {
    setUserSelected(user)
  }

  const updateUser = (user) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
      .then(getUsers)
      .catch(error => { console.log(error.response) })

  }
  const deselectUser = () => {
    setUserSelected(null)
  }
  const deleteUser = (user) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
      .then(getUsers)
    Alert("delete")
  }
  const Alert = (type) => {
    if (type === "new") {
      swal({
        icon: "success",
        title: "user created successfully"
      })

    } else if (type === "delete") {
      swal({
        icon: "success",
        title: "successfully removed"
      })
    } else if (type === "update") {
      swal({
        icon: "success",
        title: "successfully updated"
      })
    }
  }

  return (
    <>
      <div className='App'>
        <List
          Users={users}
          selectUser={selectUser}
          deleteUser={deleteUser} />
        <UserForm
          Alert={Alert}
          getUsers={getUsers}
          selectUser={userSelected}
          update={updateUser}
          deselect={deselectUser} />

      </div>
    </>
  )
}

export default App
