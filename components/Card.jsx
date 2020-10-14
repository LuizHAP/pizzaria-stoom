import { usePizza } from "../hooks/pizza";

const Card = (key, title, description, img) => {
  return (
    <div
      className={styles.card}
      key={key}
      onClick={() => {
        handleSelectPasta(item.name);
      }}
    >
      <h2>{item.name}</h2>
      <h3>{item.description}</h3>
      <img src={item.imagem} />
    </div>
  );
};

export default Card;
