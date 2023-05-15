// Checkbox checker

const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((item) => {
  const checkboxInput = item.children[0];
  const secondChild = item.children[1];
  checkboxInput.addEventListener("click", function () {
    if (checkboxInput.checked) {
      secondChild.classList.add("checkbox--checked");
    } else {
      secondChild.classList.remove("checkbox--checked");
    }
  });
});

// Required input checker

document.addEventListener("DOMContentLoaded", (event) => {
  const requiredInputs = document.querySelectorAll(".required");

  requiredInputs.forEach((item) => {
    const firstChild = item.children[0];
    const secondChild = item.children[1];
    let hasInput = false;

    firstChild.addEventListener("input", function () {
      if (this.value !== "") {
        hasInput = true;
        // Remove classes
        secondChild.classList.remove("required-text");
        this.classList.remove("required-input");
      } else if (hasInput) {
        // Add classes
        secondChild.classList.add("required-text");
        this.classList.add("required-input");
      }
    });
  });
});

// Modal Code

document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("keydown", function (event) {
    // Check if the 'Escape' key was pressed
    if (event.key === "Escape" || event.keyCode === 27) {
      // Get all elements with the 'modal' class
      let modals = document.getElementsByClassName("modal");

      // Loop over the modals
      for (let i = 0; i < modals.length; i++) {
        let modal = modals[i];

        // If the 'modal' exists and is visible
        if (modal && window.getComputedStyle(modal).display !== "none") {
          // Remove the 'collapsible--expanded' class
          modal.classList.remove("modal--expanded");
        }
      }
    }
  });
});

// Open modal on task card click

document.addEventListener("DOMContentLoaded", (event) => {
  // Get all elements with the 'task-card' class
  let taskCards = document.getElementsByClassName("task-card");

  // Loop over the task cards
  for (let i = 0; i < taskCards.length; i++) {
    let taskCard = taskCards[i];

    // Add a click event listener to each task card
    taskCard.addEventListener("click", function (event) {
      // Get all elements with the 'modal' class
      let modals = document.getElementsByClassName("modal");

      // Loop over the modals
      for (let j = 0; j < modals.length; j++) {
        let modal = modals[j];

        // Add the 'collapsible--expanded' class
        modal.classList.add("modal--expanded");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  // Get all elements with the 'sidebar-btn' class
  let sidebarBtns = document.getElementsByClassName("sidebar-selectable");

  // Loop over the sidebar buttons
  for (let i = 0; i < sidebarBtns.length; i++) {
    let btn = sidebarBtns[i];

    // Add a click event listener to each button
    btn.addEventListener("click", function (event) {
      // Check if the button has the 'btn--secondary' class
      if (this.classList.contains("btn--secondary")) {
        // Loop over the sidebar buttons to add the 'btn--secondary' class
        for (let j = 0; j < sidebarBtns.length; j++) {
          sidebarBtns[j].classList.add("btn--secondary");
          sidebarBtns[j].classList.add("btn--clear");
        }

        // Remove the 'btn--secondary' class from the clicked button
        this.classList.remove("btn--secondary");
        this.classList.remove("btn--clear");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  // Get the element with the 'sidebar-hide' class
  let sidebarHide = document.querySelector(".sidebar-hide");

  // Add a click event listener to the element
  sidebarHide.addEventListener("click", function (event) {
    // Get all elements with the 'sidebar' class
    let sidebars = document.getElementsByClassName("sidebar");

    // Loop over the sidebar elements to remove the 'sidebar--expanded' class
    for (let i = 0; i < sidebars.length; i++) {
      sidebars[i].classList.remove("sidebar--expanded");
    }

    // Get all elements with the 'logo' class
    let logos = document.getElementsByClassName("logo");

    // Loop over the logo elements to remove the 'logo--expanded' class
    for (let j = 0; j < logos.length; j++) {
      logos[j].classList.remove("logo--expanded");
    }

    let showSidebar = document.querySelector(".show-sidebar");

    showSidebar.classList.add("show-sidebar--expanded");
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the element with the 'show-sidebar' class
    let showSidebar = document.querySelector('.show-sidebar');

    // Add a click event listener to the element
    showSidebar.addEventListener('click', function(event) {
        // Get all elements with the 'sidebar' class
        let sidebars = document.getElementsByClassName('sidebar');

        // Loop over the sidebar elements to add the 'sidebar--expanded' class
        for(let i = 0; i < sidebars.length; i++) {
            sidebars[i].classList.add('sidebar--expanded');
        }

        // Get all elements with the 'logo' class
        let logos = document.getElementsByClassName('logo');

        // Loop over the logo elements to add the 'logo--expanded' class
        for(let j = 0; j < logos.length; j++) {
            logos[j].classList.add('logo--expanded');
        }

        // Remove the 'show-sidebar--expanded' class from the clicked element
        this.classList.remove('show-sidebar--expanded');
    });
});