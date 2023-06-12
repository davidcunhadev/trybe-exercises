import {useNavigate} from 'react-router-dom'

export function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/coffees');
  }
  return (
    <>
      <main>
        <h1>Home Page Coffeeteria</h1>
        <button onClick={handleClick}>Conheça nossos produtos!</button>
      </main>
    </>
  )
}
