import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.identity}>
            <h2>N'DJORE Jean Jacques</h2>
            <p>Développeur Géospatial</p>
            <span>
              Je transforme les données géographiques en solutions
              intelligentes et innovantes.
            </span>
          </div>

          <div className={styles.contact}>
            <h3>Me contacter</h3>
            <a href="mailto:ndjorejjacques@gmail.com">
              ndjorejjacques@gmail.com
            </a>
            <a href="tel:+22507777777">+225 07 777 777</a>
          </div>

          <div className={styles.social}>
            <h3>Retrouvez-moi</h3>
            <a
              href="https://www.linkedin.com/in/jean-jacques-ndjore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/jean-jacques-ndjore"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 N'DJORE Jean Jacques. Tous droits réservés.
          </p>
          <p>Conçu avec Next.js & React</p>
        </div>

      </div>
    </footer>
  );
}
