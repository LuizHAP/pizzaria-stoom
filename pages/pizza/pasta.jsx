import { useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";
import { toast } from "react-toastify";

import { usePizza } from "../../hooks/pizza";
import { usePoints } from "../../hooks/points";

import styles from "../../styles/Pasta.module.css";

const Pasta = (props) => {
  const router = useRouter();

  const { setPasta } = usePizza();
  const { setPoints, points } = usePoints();

  const handleSelectPasta = useCallback(
    (pastaName, recommended) => {
      if (recommended) {
        setPoints(points + 10);
        toast.success("Você selecionou uma opção recomendada");
      } else {
        setPoints(points + 2);
      }
      setPasta(pastaName);
      router.push("/pizza/size");
    },
    [router.push, setPasta]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaRia :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Escolha sua <span>massa</span> 😁
      </h1>
      <div className={styles.cardsContainer}>
        {props.pasta.map((item, key) => (
          <div
            className={styles.card}
            key={key}
            onClick={() => {
              handleSelectPasta(item.name, item.recommended);
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
    </div>
  );
};

Pasta.getInitialProps = async function () {
  const res = await axios.get("/api/getPastas");
  return {
    pasta: res.data,
  };
};

export default Pasta;
