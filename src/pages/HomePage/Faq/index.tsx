import styles from "./styles.module.scss";

const Faq = () => {
  return (
    <section id="Faq" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.partOne}>
          <h1>FAQ</h1>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className={styles.innerContent}>
          <div className={styles.left}>
            <div className="leftOne">
              <h3>The best financial accounting app ever!</h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="leftTwo">
              <h3>The best financial accounting app ever!</h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="leftThree">
              <h3>The best financial accounting app ever!</h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className="rightOne">
              <h3>The best financial accounting app ever!</h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rightTwo">
              <h3>The best financial accounting app ever!</h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rightThree">
              <h3>The best financial accounting app ever!</h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
