const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) {
    return;
  }
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
const getSubmit = document.getElementById("done");

openbutton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", false);
  closebutton.setAttribute("aria-hidden", false);
  getSubmit.setAttribute("aria-hidden", false);
  modal.show();
});
closebutton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", true);
  closebutton.setAttribute("aria-hidden", true);
  getSubmit.setAttribute("aria-hidden", true);
  modal.close();
});

/*RADIOBUTTONS AND CATAGORIES*/
$(".department")
  .on("input[type='radio']")
  .on("change", function (event) {
    const id = event.target.value;

    $(".modal-button").show();
    openbutton.setAttribute("aria-hidden", false);

    $(".sub-catagory")
      .not("#" + id)
      .attr("aria-hidden", true);
    $(".sub-catagory")
      .not("#" + id)
      .hide();

    $("#" + id).attr("aria-hidden", false);
    $("#" + id).show();
  });

/*Submit and designation display*/
const designation = document.getElementById("designation");
$(".sub-catagory")
  .on("input[type='radio']")
  .on("change", function (event) {
    getSubmit.addEventListener("click", () => {
      $(".placement").attr("aria-hidden", false);
      $(".placement").show();
      designation.innerHTML = event.target.value;
    });
  });

/*Language/font-change */
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

/*Navigation animation*/
$("#langNav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("footer").offset().top,
    },
    500
  );
});
$("#home").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("body").offset().top,
    },
    500
  );
});
