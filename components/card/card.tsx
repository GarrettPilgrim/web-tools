<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";

type CardProps = {
  id: string,
  name: string,
  image: string,
  alt: string,
}

export default function Card(props: CardProps) {
  const { id, name, image, alt } = props;
  return (
    <Link href={`posts/${id}`} className={styles.product}>
      <div className="product-text">
        <h2>{name}</h2>
      </div>
    </Link>
  );
}

// href={`products/${id}`}
=======
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
>>>>>>> ecd599070b3304df09a8db3149890327a24f2918
