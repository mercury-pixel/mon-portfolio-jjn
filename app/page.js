import Tag from "./components/Tags/Tags";
import styles from "./page.module.css";

const technologyGroups = [
  {
    category: "Développement Web & Full-Stack",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Python",
      "Node.js",
      "FastAPI",
      "HTML",
      "CSS",
      "API REST",
    ],
  },
  {
  category: "Web SIG & Cartographie interactive",
  technologies: [
    "WebGIS",
    "Leaflet",
    "Mapbox",
    "OpenLayers",
    "GeoServer",
    "PostGIS",
    "GeoDjango",
    "GeoJSON",
    "WMS",
    "WFS",
    "API géospatiales",
    "Cartographie web",
  ],
},
  {
    category: "Géomatique & SIG",
    technologies: [
      "QGIS",
      "PostGIS",
      "PostgreSQL",
      "Leaflet",
      "Mapbox",
      "Télédétection",
      "Analyse spatiale",
      "Cartographie",
    ],
  },
  {
    category: "Irrigation & Hydraulique agricole",
    technologies: [
      "Irricad Pro",
      "Conception de réseaux d'irrigation",
      "Dimensionnement hydraulique",
      "Aménagement hydro-agricole",
    ],
  },
  {
    category: "DAO & Conception technique",
    technologies: [
      "AutoCAD",
      "Dessin technique",
      "Plans topographiques",
    ],
  },
  {
    category: "Topographie & Géoréférencement",
    technologies: [
      "Hi-Target",
      "GNSS",
      "Levés topographiques",
      "Géoréférencement",
    ],
  },
  {
    category: "Outils & Technologies complémentaires",
    technologies: [
      "Docker",
      "Git",
      "CI/CD",
      "Machine Learning",
      "Deep Learning",
      "Big Data",
      "Cloud Computing",
      "DevOps",
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.backgroundGlow}></div>

        <div className={styles.heroContent}>

          {/* Présentation */}
          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              <span className={styles.statusDot}></span>
              DÉVELOPPEMENT WEB & GÉOSPATIAL
            </span>

            <h1 className={styles.heroTitle}>
              Bonjour, je suis
              <span className={styles.highlight}>
                Jean Jacques N'DJORE.
              </span>
            </h1>

            <h2 className={styles.heroSubtitle}>
              Développeur Géospatial
              <span className={styles.separator}> | </span>
              Full-Stack
            </h2>

            <p className={styles.heroDescription}>
              Je conçois et développe des applications web modernes,
              performantes et intelligentes. À la croisée du développement
              Full-Stack et des Sciences et Technologie Géospatiales, je transforme les données
              géographiques en solutions numériques innovantes.
            </p>

            {/* Actions */}
            <div className={styles.heroButtons}>
              <a href="/projects" className={styles.btnPrimary}>
                Découvrir mes projets
                <span>↗</span>
              </a>

              <a href="/contact" className={styles.btnSecondary}>
                Me contacter
              </a>
            </div>

            {/* Technologies */}
            <div className={styles.techSection}>
              <div className={styles.techHeading}>
                <span className={styles.techLine}></span>
                <p>TECHNOLOGIES & EXPERTISES</p>
              </div>

              <div className={styles.techGroups}>
                {technologyGroups.map((group) => (
                  <div key={group.category} className={styles.techGroup}>
                    <h3>{group.category}</h3>

                    <div className={styles.tagsContainer}>
                      {group.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Indicateur de défilement */}
          <a href="#projects" className={styles.scrollIndicator}>
            <span>Explorer mon portfolio</span>
            <span className={styles.scrollArrow}>↓</span>
          </a>

        </div>
      </section>
    </main>
  );
}
