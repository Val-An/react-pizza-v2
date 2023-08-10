import {Link} from "react-router-dom";

function ButtonHome() {
  return (
    <Link to={"/"}>
      <button className="button button--black">
        <span>Вернуться на главную</span>
      </button>
    </Link>
  )
}

export default ButtonHome