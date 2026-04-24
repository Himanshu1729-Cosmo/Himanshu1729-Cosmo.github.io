document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((block) => {
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-btn";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(block.innerText);
      button.innerText = "Copied!";
      setTimeout(() => (button.innerText = "Copy"), 2000);
    });

    const pre = block.parentNode;
    pre.style.position = "relative";
    pre.appendChild(button);
  });
});
