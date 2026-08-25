document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const whatsappNumber = "2347016843356";
  const whatsappMessage = "Hello ManGO, I'd like to place an order. Can you help?";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Keep every WhatsApp CTA consistent.
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = whatsappURL;
  });

  // Generate the live QR code for ManGO WhatsApp.
  const qrTarget = document.getElementById("qrcode");
  if (qrTarget && typeof QRCode !== "undefined") {
    new QRCode(qrTarget, {
      text: whatsappURL,
      width: 250,
      height: 250,
      colorDark: "#17121d",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // Mobile navigation.
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".desktop-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("mobile-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      });
    });
  }
});
