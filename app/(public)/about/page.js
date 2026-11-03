import Link from "next/link";
import styles from "./about.module.css";

const expertise = [
  {
    icon: "🌐",
    title: "Développement Web & Full-Stack",
    description:
      "Conception d'applications web modernes, interfaces interactives et API avec React, Next.js et Python.",
    tools: ["React", "Next.js", "Python", "FastAPI", "GeoDjango", "Node.js", "JavaScript", "API REST", "Docker", "CI/CD", "Git", "GitHub", "GiLtLab", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: "🗺️",
    title: "Web SIG & Géomatique",
    description:
      "Développement de solutions cartographiques, visualisation de données géographiques et analyse spatiale.",
    tools: ["Leaflet", "Mapbox", "PostGIS", "QGIS", "GeoServer", "OpenLayers", "GeoJSON", "WMS", "WFS", "GEE", "API géospatiales", "Photogrammétrie", "Cartographie web", "Télédétection", "Analyse spatiale", "Agitsoft Metashape"],
  },
  {
    icon: "📍",
    title: "Topographie & Géoréférencement",
    description:
      "Collecte, traitement et exploitation des données topographiques et géographiques sur le terrain.",
    tools: ["Hi-Target", "GNSS", "Levés topographiques"],
  },
  {
    icon: "💧",
    title: "Irrigation & Conception technique",
    description:
      "Conception et étude de réseaux d'irrigation et réalisation de plans techniques.",
    tools: ["Irricad Pro", "AutoCAD", "Google Earth Pro", "Global Mapper"],
  },
];

export default function About() {
  return (
    <main className={styles.about}>

      {/* En-tête */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>DÉCOUVREZ MON UNIVERS</span>

          <h1>
            À propos <span>de moi.</span>
          </h1>

          <p>
            Un profil polyvalent à la croisée du développement
            informatique, de la géomatique et des sciences du territoire.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className={styles.presentation}>
        <div className={styles.container}>
          <div className={styles.presentationGrid}>

            <div className={styles.profileVisual}>
              <div className={styles.profileCard}>
                <div className={styles.profileIcon}>JJN</div>
                <h2>Jean Jacques N'DJORE</h2>
                <p>Développeur Géospatial Full-Stack</p>
                <span className={styles.profileLine}></span>
                <span className={styles.profileLabel}>
                  WEB SIG · GÉOMATIQUE · IRRIGATION
                </span>
              </div>
            </div>

            <div className={styles.presentationText}>
              <span className={styles.sectionLabel}>QUI SUIS-JE ?</span>

              <h2>
                Transformer les données en
                <span> solutions concrètes.</span>
              </h2>

              <p>
                Je suis Jean Jacques N'DJORE, développeur géospatial
                Full-Stack passionné par les technologies numériques
                et les solutions basées sur les données géographiques.
              </p>

              <p>
                Mon domaine d'intervention associe le développement
                d'applications web, les systèmes d'information
                géographique, la cartographie interactive, la topographie
                et la conception de systèmes d'irrigation.
              </p>

              <p>
                J'aime concevoir des outils qui facilitent l'exploitation
                des données, améliorent la prise de décision et répondent
                aux besoins concrets des professionnels et des territoires.
              </p>

              <Link href="/projects" className={styles.discoverButton}>
                Découvrir mes réalisations <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>MES COMPÉTENCES</span>
            <h2>Mes domaines d'expertise</h2>
            <p>
              Des compétences complémentaires au service de projets
              numériques, géographiques et techniques.
            </p>
          </div>

          <div className={styles.expertiseGrid}>
            {expertise.map((item) => (
              <article className={styles.expertiseCard} key={item.title}>
                <div className={styles.expertiseIcon}>{item.icon}</div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className={styles.tools}>
                  {item.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className={styles.vision}>
        <div className={styles.container}>
          <div className={styles.visionContent}>
            <span className={styles.sectionLabel}>MA VISION</span>

            <h2>
              La technologie au service
              <span> du développement.</span>
            </h2>

            <p>
              Je souhaite contribuer à des projets innovants qui
              rapprochent les technologies numériques, les données
              géographiques et les réalités du terrain.
            </p>

            <Link href="/contact" className={styles.visionButton}>
              Échangeons sur vos projets ↗
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}