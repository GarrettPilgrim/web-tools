import Image from "next/image";
import styles from "./tool-page.module.scss";

export default function ToolPage(props) {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <Image src={props.image} alt={props.alt} width={910} height={512} />
      </div>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={props.content}></div>
    </div>
  );
}
