
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./detail.module.css";
import projectData from "../../../data/projects.json";


// Configuration du rendu statique
// export const dynamic = "force-static";

// Génération des pages à partir du JSON
export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}


// SEO dynamique de chaque projet
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projectData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Cette réalisation n'est pas disponible.",
    };
  }

  const title = `${project.title} | Jean Jacques N'DJORE`;

  const description =
    project.shortDescription ||
    project.longDescription ||
    "Découvrez cette réalisation en développement web et géomatique.";

  const baseUrl = "https://www.ton-domaine.com";

  const projectUrl = `${baseUrl}/projects/${project.slug}`;

  const imageUrl = project.image?.startsWith("http")
    ? project.image
    : `${baseUrl}${project.image}`;

  return {
    title,
    description,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title,
      description,
      url: projectUrl,
      siteName: "Jean Jacques N'DJORE - Portfolio",
      type: "article",
      locale: "fr_FR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectDetail({ params }) {
  // Récupération du slug
  const { slug } = await params;

  // Recherche du projet correspondant
  const project = projectData.find(
    (item) => item.slug === slug
  );

  // Si le projet n'existe pas
  if (!project) {
    notFound();
  }

  return (
    <main className={styles.detail}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>

          <Link href="/projects" className={styles.backLink}>
            ← Retour aux projets
          </Link>

          <span className={styles.category}>
            {project.category || "Projet professionnel"}
          </span>

          <h1>{project.title}</h1>

          <p>
            {project.shortDescription}
          </p>

          <div className={styles.meta}>
            <span>
              Projet · {project.type || "Réalisation"}
            </span>

            <span>Jean Jacques N'DJORE</span>
          </div>

        </div>
      </section>

      {/* CONTENU */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* IMAGE DU PROJET */}
          <div className={styles.projectVisual}>

            {project.image ? (
              <Image
                src={project.image}
                alt={`Illustration de ${project.title}`}
                width={1200}
                height={750}
                className={styles.projectImage}
                preload={true}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span>PROJET</span>
                <h2>{project.title}</h2>
                <p>{project.category}</p>
              </div>
            )}

          </div>

          <div className={styles.contentGrid}>

            {/* DESCRIPTION PRINCIPALE */}
            <div className={styles.mainContent}>

              <section className={styles.contentBlock}>
                <span className={styles.sectionLabel}>
                  01 — PRÉSENTATION
                </span>

                <h2>À propos du projet</h2>

                <p>
                  {project.longDescription ||
                    project.shortDescription}
                </p>
              </section>

              {/* DESCRIPTION COMPLÉMENTAIRE */}
              {project.context && (
                <section className={styles.contentBlock}>
                  <span className={styles.sectionLabel}>
                    02 — CONTEXTE
                  </span>

                  <h2>Contexte du projet</h2>

                  <p>{project.context}</p>
                </section>
              )}

              {/* OBJECTIFS */}
              {project.objectives?.length > 0 && (
                <section className={styles.contentBlock}>
                  <span className={styles.sectionLabel}>
                    03 — OBJECTIFS
                  </span>

                  <h2>Objectifs du projet</h2>

                  <ul className={styles.objectives}>
                    {project.objectives.map((objective, index) => (
                      <li key={index}>
                        <span>✓</span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* SOLUTION */}
              {project.solution && (
                <section className={styles.contentBlock}>
                  <span className={styles.sectionLabel}>
                    04 — RÉALISATION
                  </span>

                  <h2>Solution proposée</h2>

                  <p>{project.solution}</p>
                </section>
              )}

              {/* FONCTIONNALITÉS */}
              {project.features?.length > 0 && (
                <section className={styles.contentBlock}>
                  <h2>Fonctionnalités principales</h2>

                  <ul className={styles.features}>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}

            </div>

            {/* SIDEBAR */}
            <aside className={styles.sidebar}>

              {/* TECHNOLOGIES */}
              <div className={styles.sidebarCard}>
                <h2>Technologies utilisées</h2>

                <div className={styles.technologies}>
                  {(project.tags || []).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* INFORMATIONS */}
              <div className={styles.sidebarCard}>
                <h2>Informations</h2>

                <div className={styles.infoRow}>
                  <span>Catégorie</span>
                  <strong>
                    {project.category || "Non renseignée"}
                  </strong>
                </div>

                <div className={styles.infoRow}>
                  <span>Type</span>
                  <strong>
                    {project.type || "Non renseigné"}
                  </strong>
                </div>

                {project.year && (
                  <div className={styles.infoRow}>
                    <span>Année</span>
                    <strong>{project.year}</strong>
                  </div>
                )}

                <div className={styles.infoRow}>
                  <span>Réalisateur</span>
                  <strong>Jean Jacques N'DJORE</strong>
                </div>
              </div>

              {/* LIENS EXTERNES */}
              {(project.github || project.demo) && (
                <div className={styles.sidebarCard}>
                  <h2>Liens du projet</h2>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      Voir le code source ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      Voir la démonstration ↗
                    </a>
                  )}
                </div>
              )}

            </aside>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>

          <h2>Vous avez un projet similaire ?</h2>

          <p>
            Échangeons sur vos besoins et imaginons ensemble
            des solutions adaptées à vos objectifs.
          </p>

          <Link href="/contact" className={styles.ctaButton}>
            Me contacter ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
