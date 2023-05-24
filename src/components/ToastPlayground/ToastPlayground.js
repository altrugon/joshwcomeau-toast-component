import React from "react";

import { ToastContext, VARIANT_OPTIONS } from "../ToastProvider";
import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const { variant, setVariant, message, setMessage, popToast } =
    React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (!variant || !message) {
      return;
    }

    popToast(variant, message);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((variantOption) => {
              return (
                <div
                  key={variantOption}
                  className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                  <label htmlFor={`variant-${variantOption}`}>
                    <input
                      id={`variant-${variantOption}`}
                      type="radio"
                      name="variant"
                      value={variantOption}
                      checked={variant === variantOption}
                      onChange={(event) => {
                        setVariant(event.target.value);
                      }}
                      tabIndex={0}
                    />
                    {variantOption}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
