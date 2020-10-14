import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        PizzaRia, a sua <span>pizza perfeita</span> e com um sorriso 😁
      </h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href="/pizza/pasta">
            <h3>Criar sua pizza</h3>
          </Link>
        </div>
      </div>

      <footer className={styles.footer}>Powered by Luiz</footer>
    </div>
  );
}
