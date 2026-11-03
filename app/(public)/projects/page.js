
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Tag from "../../components/Tags/Tags";
import projectData from "../../data/projects.json";

export default function ProjectsPage() {
  // Vérification des données
  const projects = Array.isArray(projectData) ? projectData : [];

  // Nombre de projets mis en avant
  const featuredCount = projects.filter(
    (project) => project.featured
  ).length;

  return (
    <main className={styles.projects}>

      {/* En-tête */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            MON UNIVERS PROFESSIONNEL
          </span>

          <h1>
            Mes <span>Projets.</span>
          </h1>

          <p>
            Découvrez une sélection de mes réalisations dans le
            développement web, la géomatique, les systèmes
            d'information géographique et les technologies numériques.
          </p>

          <a href="#project-list" className={styles.heroButton}>
            Explorer mes réalisations <span>↓</span>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <div>
              <span className={styles.sectionLabel}>
                MES RÉALISATIONS
              </span>

              <h2>
                Des idées transformées en
                <span> solutions concrètes.</span>
              </h2>
            </div>

            <p>
              Chaque projet est une occasion de mettre en pratique
              mes compétences techniques, ma créativité et mon
              intérêt pour les solutions numériques et géospatiales.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section
        className={styles.projectSection}
        id="project-list"
      >
        <div className={styles.container}>

          {/* En-tête des projets */}
          <div className={styles.projectHeader}>
            <div>
              <h2>Projets sélectionnés</h2>
              <p>
                Des réalisations techniques et professionnelles.
              </p>
            </div>

            <span>
              {projects.length} réalisations
            </span>
          </div>

          {/* Grille des projets */}
          {projects.length > 0 ? (
            <div className={styles.grid}>

              {projects.map((project) => (
                <article
                  key={project.slug || project.id}
                  className={styles.card}
                >

                  {/* Partie supérieure */}
                  <div className={styles.cardTop}>
                    <span className={styles.projectNumber}>
                      {String(project.id).padStart(2, "0")}
                    </span>

                    {project.category && (
                      <span className={styles.category}>
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Illustration du projet ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                        className={styles.image}
                        preload={true}
                      />
                    ) : (
                      <div className={styles.imagePlaceholder}>
                        Image non disponible
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className={styles.cardContent}>

                    {project.featured && (
                      <span className={styles.featured}>
                        Projet mis en avant
                      </span>
                    )}

                    <h3>{project.title}</h3>

                    <p>
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className={styles.tags}>
                      {(project.technologies || []).map((tech) => (
                        <Tag key={tech}>
                          {tech}
                        </Tag>
                      ))}
                    </div>

                  </div>

                  {/* Pied de carte */}
                  <div className={styles.cardFooter}>
                    <Link
                      href={
                        // `${project.href}/${project.slug}` ||
                        `/projects/${project.slug}`
                      }
                      className={styles.projectLink}
                      aria-label={`Découvrir le projet ${project.title}`}
                    >
                      Découvrir le projet
                      <span>↗</span>
                    </Link>

                    {/* Liens externes facultatifs */}
                    <div className={styles.externalLinks}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Code source de ${project.title}`}
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Démo de ${project.title}`}
                        >
                          Démo ↗
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>Aucun projet disponible</h3>
              <p>
                Les projets seront bientôt présentés ici.
              </p>
            </div>
          )}

          {/* Appel à l'action */}
          <div className={styles.projectCta}>
            <div>
              <span className={styles.sectionLabel}>
                UNE IDÉE EN TÊTE ?
              </span>

              <h2>
                Construisons ensemble votre prochain projet.
              </h2>

              <p>
                Je suis ouvert aux collaborations, aux échanges
                professionnels et aux nouveaux défis.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.contactButton}
            >
              Me contacter <span>↗</span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
