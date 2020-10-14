import { useCallback } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";

import { usePizza } from "../../hooks/pizza";

import styles from "../../styles/Size.module.css";

const Size = (props) => {
  const router = useRouter();

  const { setSize } = usePizza();

  const handleSelectSize = useCallback(
    (sizeName) => {
      setSize(sizeName);
      router.push("/pizza/filling");
    },
    [router.push, setSize]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Escolha o <span>tamanho</span> 😁</h1>
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
