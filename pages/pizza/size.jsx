import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "../../styles/Size.module.css";

import { useEffect } from "react";

const Size = (props) => {
  const router = useRouter();

  function handleSelectSize() {
    router.push("/pizza/filling");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :) - Escolha o tamanho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Escolha o tamanho 😁</h1>
        <div className={styles.cardsContainer}>
          {props.size.map((item, key) => (
            <div
              className={styles.card}
              key={key}
              onClick={() => {
                handleSelectSize(item.name);
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

Size.getInitialProps = async function () {
  const res = await axios.get("/api/getSize");
  return {
    size: res.data,
  };
};

export default Size;
