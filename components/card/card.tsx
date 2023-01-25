import style from "./card.module.scss"

const Card = (props: any) => {
  return(
    <div className={style.container}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card;