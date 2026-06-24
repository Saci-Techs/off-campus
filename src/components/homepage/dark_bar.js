"use client";
import styles from "./geral.module.css";
import LikeIcon from "../icons/like";
import ConfigIcon from "../icons/config";
import LogoutIcon from "../icons/logout";
import { useState } from "react";
export default function Dark_bar() {
  const [btnpressed, setBtnPressed] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div className={styles.menuconfig}>
      <div className={styles.caixapesquisa}>
        <h1 className={styles.menutxtcolor}> Qual evento você quer ir? </h1>
      </div>
      {!login && (
        <div className={styles.logindiv}>
          <button
            className={styles.loginbtn}
            onClick={() => {
              setLogin((prev) => !prev);
            }}
          >
            <p className={styles.logintext}> Cadastro/Login </p>
          </button>
        </div>
      )}
      {login && (
        <button
          className={styles.menubtn}
          onClick={() => {
            setBtnPressed(!btnpressed);
          }}
        >
          <div
            className={styles.secondarymenu}
            style={btnpressed ? { height: "250px" } : { height: "0%" }}
          >
            <p className={styles.fontconfigsecondmenu}>
              {" "}
              <LikeIcon /> Favoritos{" "}
            </p>
            <p className={styles.fontconfigsecondmenu}>
              {" "}
              <ConfigIcon /> Configurações{" "}
            </p>
            <p
              className={styles.fontconfigsecondmenu}
              onClick={() => {
                setLogin((prev) => !prev);
              }}
            >
              {" "}
              <LogoutIcon /> logout{" "}
            </p>
          </div>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </div>
  );
}
