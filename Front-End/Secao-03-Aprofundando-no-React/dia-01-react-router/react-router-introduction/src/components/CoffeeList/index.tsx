import { coffeeList } from "../../data";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export function CoffeeList() {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }
  
  return (
    <>
      <h1>Confira nossos cafés!</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (<Link to={`/coffees/${coffee.slug}`} key={coffee.id}>
              <li>{coffee.title}</li>
            </Link>))
          }
        </ul>
      </main>
      <button onClick={handleBack}>Voltar para página inicial</button>
    </>
  )
}