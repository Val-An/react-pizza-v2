import styles from "./NotFound.module.scss"
import ButtonHome from "../Components/ButtonHome";
function NotFound() {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>😕</div>
      <br/>
      <h1>Ничего не найдено</h1>
      <h3>К сожалению данная страница отсутствует в нашем интернет-магазине</h3>
      <ButtonHome />
    </div>
  )
}

export default NotFound