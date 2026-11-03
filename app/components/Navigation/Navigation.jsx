"use client";

import { usePathname } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

function NavigationContent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Projets" },
    { href: "/formations", label: "Formations" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>

        <Link
          href="/"
          className={styles.logo}
          onClick={() => setIsOpen(false)}
        >
          Mon Portfolio
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${
                    isActive ? styles.active : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
}

export default function Navigation() {
  return (
    <Suspense fallback={<nav className={styles.nav}></nav>}>
      <NavigationContent />
    </Suspense>
  );
}