import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/boar.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Sæhrímnir</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={"main-image"}>
        <img src={mealsImage} alt="A table full of delicous food!" />
      </div>
    </Fragment>
  );
};

export default Header;
