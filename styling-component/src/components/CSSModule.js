import React from "react";
import styles from "../cssmodule/CSSModule.module.css";

const CSSModule = () => {
  return (
    /*                  styles.wrapper에서 꺼내옴 */
    <>
      {/*두 개를 백틱으로 묶어서 wrapper 적용시키고 inverted를 덮어씌워서 적용 */}
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요. <span className="something">CSSModule</span>
      </div>
    </>
  );
};

export default CSSModule;
