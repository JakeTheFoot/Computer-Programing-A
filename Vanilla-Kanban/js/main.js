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

document.addEventListener("DOMContentLoaded", (event) => {
  // Get the element with the 'show-sidebar' class
  let showSidebar = document.querySelector(".show-sidebar");

  // Add a click event listener to the element
  showSidebar.addEventListener("click", function (event) {
    // Get all elements with the 'sidebar' class
    let sidebars = document.getElementsByClassName("sidebar");

    // Loop over the sidebar elements to add the 'sidebar--expanded' class
    for (let i = 0; i < sidebars.length; i++) {
      sidebars[i].classList.add("sidebar--expanded");
    }

    // Get all elements with the 'logo' class
    let logos = document.getElementsByClassName("logo");

    // Loop over the logo elements to add the 'logo--expanded' class
    for (let j = 0; j < logos.length; j++) {
      logos[j].classList.add("logo--expanded");
    }

    // Remove the 'show-sidebar--expanded' class from the clicked element
    this.classList.remove("show-sidebar--expanded");
  });
});

const boards = {
  boards: [
    {
      name: "Platform Launch",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              title: "Build UI for onboarding flow",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build UI for search",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build settings UI",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Account page",
                  isCompleted: false,
                },
                {
                  title: "Billing page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "QA and test all major user journeys",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "Todo",
              subtasks: [
                {
                  title: "Internal testing",
                  isCompleted: false,
                },
                {
                  title: "External testing",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Doing",
          tasks: [
            {
              title: "Design settings and search pages",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Settings - Account page",
                  isCompleted: true,
                },
                {
                  title: "Settings - Billing page",
                  isCompleted: true,
                },
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add account management endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Upgrade plan",
                  isCompleted: true,
                },
                {
                  title: "Cancel plan",
                  isCompleted: true,
                },
                {
                  title: "Update payment method",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Design onboarding flow",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add search enpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Add search endpoint",
                  isCompleted: true,
                },
                {
                  title: "Define search filters",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add authentication endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Define user model",
                  isCompleted: true,
                },
                {
                  title: "Add auth endpoints",
                  isCompleted: false,
                },
              ],
            },
            {
              title:
                "Research pricing points of various competitors and trial different business models",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "Doing",
              subtasks: [
                {
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                },
                {
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                },
                {
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Done",
          tasks: [
            {
              title: "Conduct 5 wireframe tests",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "Done",
              subtasks: [
                {
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Create wireframe prototype",
              description:
                "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
              status: "Done",
              subtasks: [
                {
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Review results of usability tests and iterate",
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: "Done",
              subtasks: [
                {
                  title:
                    "Meet to review notes from previous tests and plan changes",
                  isCompleted: true,
                },
                {
                  title: "Make changes to paper prototypes",
                  isCompleted: true,
                },
                {
                  title: "Conduct 5 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title:
                "Create paper prototypes and conduct 10 usability tests with potential customers",
              description: "",
              status: "Done",
              subtasks: [
                {
                  title: "Create paper prototypes for version one",
                  isCompleted: true,
                },
                {
                  title: "Complete 10 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Market discovery",
              description:
                "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
              status: "Done",
              subtasks: [
                {
                  title: "Interview 10 prospective customers",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Competitor analysis",
              description: "",
              status: "Done",
              subtasks: [
                {
                  title: "Find direct and indirect competitors",
                  isCompleted: true,
                },
                {
                  title: "SWOT analysis for each competitor",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Research the market",
              description:
                "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
              status: "Done",
              subtasks: [
                {
                  title: "Write up research analysis",
                  isCompleted: true,
                },
                {
                  title: "Calculate TAM",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Marketing Plan",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              title: "Plan Product Hunt launch",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Find hunter",
                  isCompleted: false,
                },
                {
                  title: "Gather assets",
                  isCompleted: false,
                },
                {
                  title: "Draft product page",
                  isCompleted: false,
                },
                {
                  title: "Notify customers",
                  isCompleted: false,
                },
                {
                  title: "Notify network",
                  isCompleted: false,
                },
                {
                  title: "Launch!",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Share on Show HN",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Draft out HN post",
                  isCompleted: false,
                },
                {
                  title: "Get feedback and refine",
                  isCompleted: false,
                },
                {
                  title: "Publish post",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Write launch article to publish on multiple channels",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Write article",
                  isCompleted: false,
                },
                {
                  title: "Publish on LinkedIn",
                  isCompleted: false,
                },
                {
                  title: "Publish on Inndie Hackers",
                  isCompleted: false,
                },
                {
                  title: "Publish on Medium",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Doing",
          tasks: [],
        },
        {
          name: "Done",
          tasks: [],
        },
      ],
    },
    {
      name: "Roadmap",
      columns: [
        {
          name: "Now",
          tasks: [
            {
              title: "Launch version one",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Launch privately to our waitlist",
                  isCompleted: false,
                },
                {
                  title: "Launch publicly on PH, HN, etc.",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Review early feedback and plan next steps for roadmap",
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: "",
              subtasks: [
                {
                  title: "Interview 10 customers",
                  isCompleted: false,
                },
                {
                  title: "Review common customer pain points and suggestions",
                  isCompleted: false,
                },
                {
                  title: "Outline next steps for our roadmap",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Next",
          tasks: [],
        },
        {
          name: "Later",
          tasks: [],
        },
      ],
    },
  ],
};

document.addEventListener("DOMContentLoaded", constructBoards);

function constructBoards(event) {
  console.log("constructColumns function running...");

  // Board selection panel

  for(let i = 0; i < boards.boards.length; i++) {

    const mainBoard = document.createElement("div");
    mainBoard.classList.add("main-board");
    mainBoard.setAttribute("id", "board-" + i);

    if(i === 0) {
      mainBoard.classList.add("main-board--expanded")
    }

    const boardButton = document.createElement("button");
    boardButton.classList.add(
      "btn",
      "btn--secondary",
      "btn--clear",
      "sidebar-btn",
      "sidebar-selectable",
    );
    boardButton.setAttribute("id", "btn-" + i);
    console.log(boardButton.id);

    if(i === 0) {
      boardButton.classList.remove("btn--clear");
      boardButton.classList.remove("btn--secondary");
    }

    const boardIcon = document.createElement("img");
    boardIcon.src = "images/icon-board.svg";
    boardIcon.classList.add("btn-icon");

    const boardText = document.createTextNode(boards.boards[i].name);

    boardButton.appendChild(boardIcon);
    boardButton.appendChild(boardText);

    document.getElementById("sidebar-top").appendChild(boardButton);

    // Build Columns`

    boards.boards[i].columns.forEach(function (column) {
      const contentColumn = document.createElement("div");
      contentColumn.classList.add("content-column");

      const contentColumnTitle = document.createElement("h2");
      const contentColumnTitleText = document.createTextNode(column.name);
      contentColumnTitle.appendChild(contentColumnTitleText);
      contentColumnTitle.classList.add("content-column-title");

      contentColumn.appendChild(contentColumnTitle);

      column.tasks.forEach(function (task) {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        const taskName = document.createElement("h3");
        const taskNameText = document.createTextNode(task.title);
        taskName.appendChild(taskNameText);
        taskName.classList.add("header-medium");

        const taskSubtext = document.createElement("p");
        const taskSubtextText = document.createTextNode(
          task.subtasks.filter((subtask) => subtask.isCompleted === true).length +
          " of " +
          task.subtasks.length +
          " subtasks"
        );
        taskSubtext.appendChild(taskSubtextText);
        taskSubtext.classList.add("subtext");

        taskCard.appendChild(taskName);
        taskCard.appendChild(taskSubtext);

        contentColumn.appendChild(taskCard);
      });

      if(contentColumn.childElementCount > 1) {
        mainBoard.appendChild(contentColumn);
      }
    });

    const addColumn = document.createElement("div");
    addColumn.classList.add("content-column", "add-column");

    const addColumnText = document.createElement("h2");
    const addColumnTextText = document.createTextNode("+ New Column");
    addColumnText.appendChild(addColumnTextText);
    addColumnText.classList.add("header-extra-large", "add-column-text");

    addColumn.appendChild(addColumnText);

    mainBoard.appendChild(addColumn);

    document.getElementsByClassName("content-columns")[0].appendChild(mainBoard);
  };

  const boardButton = document.createElement("button");
  boardButton.classList.add(
    "btn",
    "btn--secondary",
    "btn--clear",
    "sidebar-btn",
    "create-new-board"
  );

  const boardText = document.createTextNode("+ Create new board");
  boardButton.appendChild(boardText);

  document.getElementById("sidebar-top").appendChild(boardButton);
}

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

      // Get all elements with the 'main board' class
      let mainBoards = document.querySelectorAll(".main-board");

      // Get the last character of the button's id
      let btnLastChar = this.id[this.id.length - 1];

      // Loop over the main boards
      for (let k = 0; k < mainBoards.length; k++) {
        // Remove the 'main-board--expanded' class from all elements
        mainBoards[k].classList.remove("main-board--expanded");

        // Get the last character of the main board's id
        let boardLastChar = mainBoards[k].id[mainBoards[k].id.length - 1];

        // If the last character of both ids match, add the 'main-board--expanded' class
        if (btnLastChar === boardLastChar) {
          mainBoards[k].classList.add("main-board--expanded");
        }
      }
    });
  }
});

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

        // Add the 'modal--expanded' class
        modal.classList.add("modal--expanded");
      }
    });
  }
});