import Link from "next/link";
import Head from "next/head";
import { usePizza } from "../../hooks/pizza";
import { usePoints } from "../../hooks/points";
import { useRouter } from "next/router";

import styles from "../../styles/Final.module.css";
import { useMemo, useState } from "react";
import axios from "axios";

const FinalStep = (props) => {
  const router = useRouter();
  const { pizza, clearPizza } = usePizza();
  const { points, clearPoints } = usePoints();

  const handleReset = () => {
    clearPizza();
    clearPoints();
    router.push("/");
  };

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
        <p>
          Você ganhou um total de <span>{points}</span> pontos!
        </p>
        <button className={styles.button} onClick={handleReset}>
          Recomeçar
        </button>
      </main>

      <footer className={styles.footer}>Powered by Luiz</footer>
    </div>
  );
};

export default FinalStep;
