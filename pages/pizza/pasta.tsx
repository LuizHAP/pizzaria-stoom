import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import styles from "../../styles/Home.module.css";
import { useEffect } from "react";

const Pasta = (props) => {
  useEffect(() => {
    console.warn(props.pasta);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :) - Escolha sua massa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Escolha sua massa 😁</h1>
        {props.pasta.map((item, key) => (
          <div className={styles.card} key={key}>
            <h2>{item.name}</h2>
            <h3>{item.description}</h3>
            <img src={item.imagem} />
          </div>
        ))}
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
