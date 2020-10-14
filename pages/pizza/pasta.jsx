import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import styles from "../../styles/Pasta.module.css";

const Pasta = (props) => {
  function handleSelectPizza() {}

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :) - Escolha sua massa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Escolha sua massa 😁</h1>
        <div className={styles.cardsContainer}>
          {props.pasta.map((item, key) => (
            <div
              className={styles.card}
              key={key}
              onClick={() => {
                handleSelectPizza(item.name);
              }}
            >
              <h2>{item.name}</h2>
              <h3>{item.description}</h3>
              <img src={item.imagem} />
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>Powered by Luiz</footer>
    </div>
  );
};

Pasta.getInitialProps = async function () {
  const res = await axios.get("api/getPastas");
  return {
    pasta: res.data,
  };
};

export default Pasta;
