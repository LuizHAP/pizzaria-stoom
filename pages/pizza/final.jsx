import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "../../styles/Final.module.css";

import { useEffect } from "react";

const FinalStep = (props) => {
  const router = useRouter();

  function handleBackHome() {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :) - Sua pizza está pronta!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Terminou a compra</h1>
      </main>

      <footer className={styles.footer}>Powered by Luiz</footer>
    </div>
  );
};

export default FinalStep;
