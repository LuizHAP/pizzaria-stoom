import { useCallback } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";

import { usePizza } from "../../hooks/pizza";

import styles from "../../styles/Pasta.module.css";

const Pasta = (props) => {
  const router = useRouter();

  const { setPasta } = usePizza();

  const handleSelectPasta = useCallback(
    (pastaName) => {
      setPasta(pastaName);
      router.push("/pizza/size");
    },
    [router.push, setPasta]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :) - Escolha sua massa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Escolha sua massa 😁</h1>
      <div className={styles.cardsContainer}>
        {props.pasta.map((item, key) => (
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
        ))}
      </div>

      <footer className={styles.footer}>Powered by Luiz</footer>
    </div>
  );
};

Pasta.getInitialProps = async function () {
  const res = await axios.get("/api/getPastas");
  return {
    pasta: res.data,
  };
};

export default Pasta;
