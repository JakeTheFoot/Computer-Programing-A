// Function to swap to Inter
export const interSwap = () => {
  const elements = document.querySelectorAll(
    ".heading-l, .heading-m, .heading-s, .body-m, .body-s:not(.excludes-font-swap), input.font-inter, input.font-lora, input.font-inconsolata"
  );
  elements.forEach((element) => {
    element.classList.remove("font-lora", "font-inconsolata");
    element.classList.add("font-inter");
  });
};

// Function to swap to Lora
export const loraSwap = () => {
  const elements = document.querySelectorAll(
    ".heading-l, .heading-m, .heading-s, .body-m, .body-s:not(.excludes-font-swap), input.font-inter, input.font-lora, input.font-inconsolata"
  );
  elements.forEach((element) => {
    element.classList.remove("font-inter", "font-inconsolata");
    element.classList.add("font-lora");
  });
};

// Function to swap to Inconsolata
export const inconsolataSwap = () => {
  const elements = document.querySelectorAll(
    ".heading-l, .heading-m, .heading-s, .body-m, .body-s:not(.excludes-font-swap), input.font-inter, input.font-lora, input.font-inconsolata"
  );
  elements.forEach((element) => {
    element.classList.remove("font-inter", "font-lora");
    element.classList.add("font-inconsolata");
  });
};
