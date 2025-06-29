/**
 * Boutique E-commerce Landing Page
 * Main JavaScript file - Optimisé pour l'accessibilité
 */

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerHeight = header ? header.offsetHeight : 80;
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mainNav = document.querySelector(".main-nav");
  const ctaBtn = document.querySelector(".cta-btn");
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const heroSection = document.querySelector("#hero");
  const productsSection = document.querySelector("#products");

  // Gestion du menu mobile avec accessibilité ARIA
  if (mobileToggle && mainNav) {
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.setAttribute("aria-label", "Menu principal");
    mobileToggle.setAttribute("aria-controls", "main-nav");

    mobileToggle.addEventListener("click", function () {
      const isExpanded = mainNav.classList.contains("active");
      mainNav.classList.toggle("active");
      mobileToggle.classList.toggle("active");
      mobileToggle.setAttribute(
        "aria-expanded",
        !isExpanded ? "true" : "false"
      );
      mobileToggle.setAttribute(
        "aria-label",
        !isExpanded ? "Fermer le menu" : "Menu principal"
      );
    });

    // Gestion des menus déroulants pour mobile
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        // Empêcher la navigation vers # sur mobile
        if (window.innerWidth < 992) {
          e.preventDefault();

          // Trouver le parent dropdown
          const dropdown = this.closest(".dropdown");

          // Toggle la classe active
          dropdown.classList.toggle("active");

          // Mettre à jour l'attribut aria-expanded
          const isExpanded = dropdown.classList.contains("active");
          this.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        }
      });
    });

    // Initialiser les attributs ARIA pour les dropdowns
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-haspopup", "true");

      // Trouver le menu associé et lui donner un ID unique
      const dropdown = toggle.closest(".dropdown");
      const menu = dropdown.querySelector(".dropdown-menu");
      const menuId =
        "dropdown-menu-" + Math.random().toString(36).substring(2, 9);

      menu.id = menuId;
      toggle.setAttribute("aria-controls", menuId);
    });

    // Fermer le menu mobile quand on clique ailleurs
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(".mobile-toggle") &&
        !event.target.closest(".main-nav") &&
        mainNav.classList.contains("active")
      ) {
        mainNav.classList.remove("active");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.setAttribute("aria-label", "Menu principal");
      }
    });

    // Fermer le menu avec la touche ESC pour l'accessibilité
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.setAttribute("aria-label", "Menu principal");
        mobileToggle.focus(); // Remettre le focus sur le bouton
      }
    });
  }

  // Gestion du header au scroll
  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Appliquer immédiatement pour gérer le rechargement de la page
  handleScroll();

  // Navigation fluide pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return; // Ignorer les liens avec juste #

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const yOffset = -headerHeight;
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });

        // Si le menu mobile est ouvert, le fermer après avoir cliqué sur un lien
        if (mainNav && mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
            mobileToggle.setAttribute("aria-label", "Menu principal");
          }
        }
      }
    });
  });

  // Gestion de l'indicateur de défilement
  if (scrollIndicator && productsSection) {
    scrollIndicator.addEventListener("click", function () {
      const yOffset = -headerHeight;
      const y =
        productsSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }

  // Animations d'apparition au scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkFade() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkFade);
  checkFade(); // Vérifier au chargement initial
});
