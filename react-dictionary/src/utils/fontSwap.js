// Function to swap to Inter
export const interSwap = (excludeIds = []) => {
  if (!Array.isArray(excludeIds)) {
    excludeIds = [excludeIds];
  }
  const elements = document.querySelectorAll(
    ".heading-l, .heading-m, .heading-s, .body-m, .body-s"
  );
  elements.forEach((element) => {
    if (!excludeIds.includes(element.id)) {
      element.classList.remove("font-lora", "font-inconsolata");
      element.classList.add("font-inter");
    }
  });
};

// Function to swap to Lora
export const loraSwap = (excludeIds = []) => {
  if (!Array.isArray(excludeIds)) {
    excludeIds = [excludeIds];
  }
  const elements = document.querySelectorAll(
    ".heading-l, .heading-m, .heading-s, .body-m, .body-s"
  );
  elements.forEach((element) => {
    if (!excludeIds.includes(element.id)) {
      element.classList.remove("font-inter", "font-inconsolata");
      element.classList.add("font-lora");
    }
  });
};

// Function to swap to Inconsolata
export const inconsolataSwap = (excludeIds = []) => {
  if (!Array.isArray(excludeIds)) {
    excludeIds = [excludeIds];
  }
  const elements = document.querySelectorAll(
    ".heading-l, .heading-m, .heading-s, .body-m, .body-s"
  );
  elements.forEach((element) => {
    if (!excludeIds.includes(element.id)) {
      element.classList.remove("font-inter", "font-lora");
      element.classList.add("font-inconsolata");
    }
  });
};
