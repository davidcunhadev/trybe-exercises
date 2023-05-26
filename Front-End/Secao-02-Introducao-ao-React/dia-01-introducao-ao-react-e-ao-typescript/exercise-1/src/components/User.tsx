const user = {
  name: 'Lionel',
  lastName: 'Messi'
}

function User() {
  return <span>{user.name} {user.lastName}</span>
}

export default User;