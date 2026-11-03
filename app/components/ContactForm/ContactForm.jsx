"use client";

import { useState } from "react";
import styles from "../../(public)/contact/contact.module.css";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");
    const { name, email, subject, message } = formData;

    const body = `
        Nom : ${name}
        Email : ${email}

        Message :
        ${message}
            `;

    const mailto = `mailto:jean.jacques.ndjore@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    // Mise à jour du statut
    setStatus("success");
  }

  return (
    <div className={styles.formCard}>

      <div className={styles.formHeader}>
        <h2>Envoyez-moi un message</h2>
        <p>
          Remplissez le formulaire pour me présenter votre demande.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.formGroup}>
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom et prénom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Sujet</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Sélectionnez un sujet
            </option>
            <option value="Projet Web SIG">Projet Web SIG</option>
            <option value="Développement Web">Développement Web</option>
            <option value="Géomatique et Topographie">
              Géomatique et Topographie
            </option>
            <option value="Télédétection et Photogrammétrie">
              Télédétection et Photogrammétrie
            </option>
            <option value="Projet d'irrigation">Projet d'irrigation</option>
            <option value="Collaboration professionnelle">
              Collaboration professionnelle
            </option>
            <option value="Autre demande">Autre demande</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Décrivez votre projet ou votre demande..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Préparation..."
            : "Envoyer mon message"}
          <span>↗</span>
        </button>

        <p className={styles.formNote}>
          Votre messagerie électronique s'ouvrira pour vous permettre
          d'envoyer votre message.
        </p>

        {/* 3. Affichage conditionnel basé sur le statut */}
        {status === "loading" && (
          <p>Préparation de votre message...</p>
        )}

        {status === "success" && (
          <p className={styles.successMessage}>
            Votre application de messagerie devrait s'ouvrir.
          </p>
        )}

      </form>
    </div>
  );
}
