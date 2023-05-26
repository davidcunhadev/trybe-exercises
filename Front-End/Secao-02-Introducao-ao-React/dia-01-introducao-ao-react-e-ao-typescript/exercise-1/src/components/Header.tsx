import User from "./User";
function Header() {

  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }
  
  return (
    <div>
      <h1 className="greeting">
      <User />
      </h1>
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      <h2 className="subtitle">
        Seus números da sorte de hoje são:
      </h2>
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </div>
  )
}



export default Header;