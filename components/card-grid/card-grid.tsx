import Card from "../card/card";
import styles from "./card-grid.module.scss";

export default function CardGrid({ props }) {
  return (
    <div className={styles.productgrid}>
      <h2>Products</h2>
      <section id="products">
        {props.map(({ id, image, name, alt, description }) => (
          <Card key={id} name={name} image={image} alt={alt} id={id} description={description} />
        ))}
      </section>
    </div>
  );
}
