import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "../../styles/Pasta.module.css";

import { useEffect } from "react";

const Filling = (props) => {
  const router = useRouter();

  function handleSelectFilling() {
    router.push("/pizza/final");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :) - Escolha o recheio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Escolha o recheio 😁</h1>
        <div className={styles.cardsContainer}>
          {props.filling.map((item, key) => (
            <div
              className={styles.card}
              key={key}
              onClick={() => {
                handleSelectFilling(item.name);
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

Filling.getInitialProps = async function () {
  const res = await axios.get("/api/getFilling");
  return {
    filling: res.data,
  };
};

export default Filling;
