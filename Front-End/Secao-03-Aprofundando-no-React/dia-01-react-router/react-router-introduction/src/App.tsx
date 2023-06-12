import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { CoffeeList } from './components/CoffeeList'
import { Coffee } from './components/Coffee'
import { Layout } from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={ <Home /> } />
        <Route path='/coffees' element={ <CoffeeList /> } />
        <Route path='/coffees/:coffee' element={ <Coffee />}/>.
      </Route>
        <Route path='/*' element={<h1>Sorry, não podemos localizar o que você pediu :( </h1>} />
      </Routes>
    </>
  )
}

export default App
