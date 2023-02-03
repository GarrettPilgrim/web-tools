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
  const { id, name, image, alt, description } = props;
  return (
    <Link href={`posts/${id}`} className={styles.product}>
      <div className="product-text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}