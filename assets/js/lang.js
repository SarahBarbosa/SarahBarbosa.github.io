// EN/PT language toggle. English is the default; the choice is remembered per browser
// and can be forced with ?lang=pt or ?lang=en in the URL.
(function () {
  var root = document.documentElement;
  var button = document.getElementById("lang-toggle");
  if (!button) return;

  function setLang(lang) {
    root.setAttribute("data-active", lang);
    root.lang = lang === "pt" ? "pt-BR" : "en";
    button.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para português");
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  setLang(root.getAttribute("data-active") === "pt" ? "pt" : "en");

  button.addEventListener("click", function () {
    setLang(root.getAttribute("data-active") === "pt" ? "en" : "pt");
  });
})();
