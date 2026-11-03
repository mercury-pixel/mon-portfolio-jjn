import Link from "next/link";
import { notFound } from "next/navigation";
import formationsData  from "../../../data/formations.json";
import styles from "./detail.module.css";

export function generateStaticParams() {
  return formationsData.map((formation) => ({
    slug: formation.slug,
  }));
}

export default async function FormationDetail({ params }) {
  const { slug } = await params;// Ajout du log pour vérifier le slug

  const formation = formationsData.find(
    (item) => item.slug === slug
  );

  if (!formation) {
    notFound();
  }

  return (
    <main className={styles.detailPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>

          <Link href="/formations" className={styles.backLink}>
            <span>←</span> Retour aux formations
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.category}>
                {formation.category}
              </span>

              <span className={styles.eyebrow}>
                MON PARCOURS PROFESSIONNEL
              </span>

              <h1>{formation.title}</h1>

              <p>{formation.description}</p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualCircle}>
                <span>✦</span>
                <div className={styles.visualLine}></div>
                <small>FORMATION & COMPÉTENCES</small>
              </div>
              <span className={styles.visualNumber}>
                {String(formation.id).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>FORMATION</span>
            <span className={styles.heroDot}></span>
            <span>DÉVELOPPEMENT DES COMPÉTENCES</span>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introGrid}>

            <div>
              <span className={styles.sectionLabel}>
                PRÉSENTATION
              </span>
              <h2>
                À propos de cette <span>formation</span>
              </h2>
            </div>

            <div className={styles.introText}>
              <p>{formation.introduction}</p>
            </div>

          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className={styles.objectives}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              MON APPRENTISSAGE
            </span>
            <h2>Les connaissances acquises</h2>
            <p>
              Les principaux objectifs et connaissances abordés
              dans le cadre de cette formation.
            </p>
          </div>

          <div className={styles.objectiveGrid}>
            {formation.objectives.map((objective, index) => (
              <article
                className={styles.objectiveCard}
                key={index}
              >
                <span className={styles.objectiveNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.checkIcon}>✓</span>

                <p>{objective}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROGRAMME */}
      <section className={styles.program}>
        <div className={styles.container}>

          <div className={styles.programGrid}>
            <div className={styles.programIntro}>
              <span className={styles.sectionLabel}>
                CONTENU DE LA FORMATION
              </span>

              <h2>Les principaux modules étudiés</h2>

              <p>
                Voici les différents domaines et thématiques
                abordés au cours de mon apprentissage.
              </p>
            </div>

            <div className={styles.timeline}>
              {formation.details.map((detail, index) => (
                <div className={styles.timelineItem} key={index}>
                  <div className={styles.timelineMarker}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={styles.timelineContent}>
                    <h3>Module {index + 1}</h3>
                    <p>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* COMPÉTENCES ET OUTILS */}
      <section className={styles.skills}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              SAVOIR-FAIRE
            </span>
            <h2>Compétences et outils</h2>
            <p>
              Les compétences développées et les technologies
              abordées dans cette formation.
            </p>
          </div>

          <div className={styles.skillsGrid}>

            <article className={styles.skillCard}>
              <div className={styles.skillIcon}>✧</div>
              <h3>Compétences développées</h3>

              <div className={styles.tags}>
                {formation.skills.map((skill, index) => (
                  <span className={styles.tag} key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className={styles.skillCard}>
              <div className={styles.skillIcon}>⌘</div>
              <h3>Outils et technologies</h3>

              <div className={styles.tags}>
                {formation.tools.map((tool, index) => (
                  <span className={styles.tag} key={index}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* APPORT PROFESSIONNEL */}
      <section className={styles.contribution}>
        <div className={styles.container}>
          <div className={styles.contributionCard}>

            <div className={styles.contributionNumber}>01</div>

            <div className={styles.contributionContent}>
              <span className={styles.sectionLabel}>
                MON ÉVOLUTION
              </span>

              <h2>Un atout pour mon parcours professionnel</h2>

              <p>{formation.contribution}</p>

              <Link href="/formations" className={styles.returnLink}>
                Découvrir les autres formations <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}