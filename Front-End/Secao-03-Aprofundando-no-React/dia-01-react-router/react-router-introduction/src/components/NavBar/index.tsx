import {NavLink} from 'react-router-dom'

export function NavBar() {
  return (
    <nav>
      <NavLink to= '/'>Home</NavLink>
      <br />
      <br />
      <NavLink to= '/coffees'>Cafés</NavLink>
    </nav>
  )
}