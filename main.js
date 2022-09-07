window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelectorAll("a");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);
};
