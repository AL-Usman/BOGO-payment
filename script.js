const options = document.querySelectorAll(".option");
const radioButtons = document.querySelectorAll('input[name="quantity"] ');
const detailsSections = document.querySelectorAll(".details");
// const productPrice = document.getElementById("product-price").textContent;
const productPrice = parseFloat(
  document.getElementById("product-price").textContent
);

const outputDiv = document.getElementById("output");

// Add event listeners to all radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", function () {
    // Hide all details sections
    detailsSections.forEach((details) => {
      details.style.display = "none";
    });

    // Show the corresponding details section
    const detailsId = `details-${radioButton.id.split("-")[0]}`;
    const detailsDiv = document.getElementById(detailsId);
    if (radioButton.checked && detailsDiv) {
      detailsDiv.style.display = "block";
    }
    outputDiv.textContent = `Selected Product Price: ${productPrice}`;
    const selectedOption = document
      .querySelector(`.option input[id="${radioButton.id}"]`)
      .closest(".option");
    const priceSpan = selectedOption.querySelector(".product-price");
    if (priceSpan) {
      const productPrice = priceSpan.textContent;
      outputDiv.textContent = `Total: ${productPrice}`;
    }
  });
});
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    options.forEach((option) => option.classList.remove("active")); // Remove active class from all
    if (radio.checked) {
      radio.closest(".option").classList.add("active"); // Add active class to the selected option
    }
  });
});
