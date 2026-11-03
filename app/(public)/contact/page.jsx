
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {


  return (
    <main className={styles.contact}>

      {/* En-tête */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>RESTONS EN CONTACT</span>

          <h1>
            Parlons de <span>votre projet.</span>
          </h1>

          <p>
            Vous avez un projet Web SIG, une idée innovante,
            une collaboration ou une opportunité professionnelle ?
            N'hésitez pas à me contacter.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>

            {/* Informations */}
            <aside className={styles.contactInfo}>

              <span className={styles.sectionLabel}>
                MES COORDONNÉES
              </span>

              <h2>
                Construisons quelque chose
                <span> ensemble.</span>
              </h2>

              <p className={styles.infoDescription}>
                Je suis ouvert aux échanges professionnels,
                aux collaborations et aux nouveaux projets
                dans les domaines du développement web,
                du Web SIG, des Sciences et Technologie Géospatiales, de l'irrigation.
              </p>

              <div className={styles.infoItems}>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:ndjorejjacques@gmail.com">
                      ndjorejjacques@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🌐</div>
                  <div>
                    <h3>Domaines d'intervention</h3>
                    <p>Développement Web · Web SIG · Géomatique - Télédetection - Photogrammétrie</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h3>Localisation</h3>
                    <p>Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>

              </div>

              <div className={styles.socialSection}>
                <h3>Retrouvez-moi également sur</h3>

                <div className={styles.socialLinks}>
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

            </aside>

            {/* Formulaire */}
            <ContactForm />

          </div>
        </div>
      </section>

    </main>
  );
}