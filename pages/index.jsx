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
        <span>PizzaRia</span>, a sua pizza perfeita e com um{" "}
        <span>sorriso</span> 😁
      </h1>

      <p className={styles.description}>
        Aqui na PizzaRia, você pode escolher entre a pizza recomendada pelo{" "}
        <span>chefe Giorgi Monte Arouca</span>, e receber <span>pontos</span> ou
        criar a sua própria pizza!
      </p>

      <div className={styles.grid}>
        <Link href="/pizza/pasta">
          <button className={styles.button}>Criar sua pizza</button>
        </Link>
      </div>
    </div>
  );
}
