  document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const codeElement = button.parentElement.querySelector("code");
        const codeText = codeElement.textContent;
        
        // Create a temporary textarea element to copy the text
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = codeText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);

        // Change the button text to indicate copying
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000); // Reset button text after 2 seconds
      });
    });
  });
