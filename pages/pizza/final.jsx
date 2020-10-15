import Link from "next/link";
import Head from "next/head";
import { usePizza } from "../../hooks/pizza";

import styles from "../../styles/Final.module.css";
import { useMemo, useState } from "react";
import axios from "axios";

const FinalStep = (props) => {
  const { pizza } = usePizza();

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sua <span>pizza</span> está <span>pronta</span>! 😁
        </h1>
        <div className={styles.pizzaContainer}>
          <span>Massa: {pizza.pasta}</span>
          <span>Tamanho: {pizza.size}</span>
          <span>Recheio: {pizza.filling}</span>
        </div>
        <Link href="/">
          <button className={styles.button}>Recomeçar</button>
        </Link>
      </main>

      <footer className={styles.footer}>Powered by Luiz</footer>
    </div>
  );
};

export default FinalStep;
