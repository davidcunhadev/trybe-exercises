import { calculateAge } from "../../utils/calc-age";
import Title from "../Header/header";
import ModuleDetails from "../ModuleDetails/module-details";

function Render() {
  const name = 'Lionel Messi';
  const birth = '20/08/2000';
  const age = calculateAge(birth);

  return (
    <>
      <h2 style={{color: 'red', fontFamily: 'cursive'}}>
        O craque show de bola {name} nasceu no dia {birth} e hoje tem {age} anos!
      </h2>
      <Title />
      <ModuleDetails />
    </>
  )
}

export default Render;