import { useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";
import { toast } from "react-toastify";

import { usePizza } from "../../hooks/pizza";
import { usePoints } from "../../hooks/points";

import styles from "../../styles/Filling.module.css";

const Filling = (props) => {
  const router = useRouter();

  const { setFilling } = usePizza();
  const { setPoints, points } = usePoints();

  const handleSelectFilling = useCallback(
    (fillingName, recommended) => {
      if (recommended) {
        setPoints(points + 10);
        toast.success("Você selecionou uma opção recomendada");
      } else {
        setPoints(points + 2);
      }
      setFilling(fillingName);
      router.push("/pizza/final");
    },
    [router.push, setFilling]
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Escolha o <span>recheio</span> 😁
        </h1>
        <div className={styles.cardsContainer}>
          {props.filling.map((item, key) => (
            <div
              className={styles.card}
              key={key}
              onClick={() => {
                handleSelectFilling(item.name, item.recommended);
              }}
            >
              <h2>
                {item.name} {item.recommended && <span>⭐</span>}
              </h2>
              <p>{item.description}</p>
              <img src={item.imagem} />
            </div>
          ))}
        </div>
      </main>
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
