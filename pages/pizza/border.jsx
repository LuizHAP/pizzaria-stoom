import { useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";
import { toast } from "react-toastify";

import { usePizza } from "../../hooks/pizza";
import { usePoints } from "../../hooks/points";

import styles from "../../styles/Border.module.css";

const Border = (props) => {
  const router = useRouter();

  const { setBorder } = usePizza();
  const { setPoints, points } = usePoints();

  const handleSelectBorder = useCallback(
    (borderName, recommended) => {
      if (recommended) {
        setPoints(points + 10);
        toast.success("Você selecionou uma opção recomendada");
      } else {
        setPoints(points + 2);
      }
      setBorder(borderName);
      router.push("/pizza/final");
    },
    [router.push, setBorder]
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Escolha a <span>borda</span> 😁
        </h1>
        <div className={styles.cardsContainer}>
          {props.border.map((item, key) => (
            <div
              className={styles.card}
              key={key}
              onClick={() => {
                handleSelectBorder(item.name, item.recommended);
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

Border.getInitialProps = async function () {
  const res = await axios.get("/api/getBorder");
  return {
    border: res.data,
  };
};

export default Border;
