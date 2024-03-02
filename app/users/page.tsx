import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

const UsersPage = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate: 10}}); //caching new data every 10 sec
  const users: User[] = await res.json();


  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>

        </tr>
      </thead>
      <tbody>
      {users.map(users => <tr key={users.id}>
        <td>{users.name}</td>
        <td>{users.email}</td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}

export default UsersPage


