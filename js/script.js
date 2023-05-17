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
const modal = document.getElementById("item-modal");
const openbutton = document.getElementById("open-modal");
const closebutton = document.getElementById("close-modal");

openbutton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", false);
  modal.show();
});
closebutton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", true);
  modal.close();
});

const langStar = document.getElementById("langstar");
const langEng = document.getElementById("langeng");
const body = document.querySelector("body");
langStar.addEventListener("click", () => {
  body.style.fontFamily = "Aurebesh";

  langEng.style.fontFamily = "system-ui";
});
langEng.addEventListener("click", () => {
  body.style.fontFamily = "system-ui";
});

/*RADIOBUTTONS*/

$(".department")
  .on('input[type="radio"]')
  .on("change", function (event) {
    const id = event.target.value;
    $(".modal-button").show();
    openbutton.setAttribute("aria-hidden", false);

    $(".sub-catagory")
      .not("#" + id)
      .hide();
    $(".sub-catagory")
      .not("#" + id)
      .attr("aria-hidden", true);

    $("#" + id).show();
    $("#" + id).attr("aria-hidden", false);
  });
