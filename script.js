const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}

//var test = $("#ruta").val();

/*Modal*/
const modal = document.querySelector("[item-modal]");
const openbutton = document.querySelector("[open-modal]");
const closebutton = document.querySelector("[close-modal]");

openbutton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", false);
  modal.showModal();
});
closebutton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", true);
  modal.close();
});

/*RADIOBUTTONS*/
const sub = document.querySelector(".submit");
sub.addEventListener("click", (e) => {
  console.log("works");
  if (document.getElementById("army").checked) {
  } else if (document.getElementById("marines").checked) {
  } else if (document.getElementById("navy").checked) {
  } else if (document.getElementById("intel").checked) {
  } else if (document.getElementById("station").checked) {
  }
});

/*function validate() {
  console.log("works");
  if (document.getElementById("army").checked) {
    modal.showModal();
  } else if (document.getElementById("marines").checked) {
  } else if (document.getElementById("navy").checked) {
  } else if (document.getElementById("inte").checked) {
  } else if (document.getElementById("stations").checked) {
  }
}
function init() {
  document.getElementById("form").onsubmit = validate;
}
window.onload = init;*/
