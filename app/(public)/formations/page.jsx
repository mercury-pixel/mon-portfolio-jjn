import Link from 'next/link';
import styles from './Formation.module.css'
import formationsData from '../../data/formations.json';

export default function Formations() {
  return (
    <section className={styles.formations}>
      <div className={styles.container}>

        <header className={styles.header}>
          <span className={styles.subtitle}>MON PARCOURS</span>
          <h1>Formations & Certifications</h1>
          <p>
            Découvrez mon parcours académique, mes formations
            et les compétences acquises au fil de mon évolution.
          </p>
        </header>

        <div className={styles.grid}>
          {formationsData.map((formation) => (
            <article
              key={formation.id}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.category}>
                  {formation.category}
                </span>
                <span className={styles.number}>
                  {String(formation.id).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h2>{formation.title}</h2>
                <p>{formation.description}</p>
              </div>

              <div className={styles.cardFooter}>
               <Link href={`/formations/${formation.slug}`} className={styles.cardFooter}>
                  <span>En savoir plus</span>
                </Link>
                <span className={styles.arrow}>↗</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}