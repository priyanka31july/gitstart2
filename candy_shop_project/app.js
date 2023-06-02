
const candyTableBody = document.querySelector("#candyTable tbody");


function addCandyToTable(candy) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${candy.name}</td>
    <td>${candy.description}</td>
    <td>${candy.price}</td>
    <td>${candy.quantity}</td>
    <td>
      <button class="buyBtn" data-id="${candy.id}" data-quantity="${candy.quantity}">Buy 1</button>
      <button class="buyBtn" data-id="${candy.id}" data-quantity="${candy.quantity}">Buy 2</button>
      <button class="buyBtn" data-id="${candy.id}" data-quantity="${candy.quantity}">Buy 3</button>
    </td>
  `;
  candyTableBody.appendChild(row);
}

/*
function updateCandyQuantity(candyId, newQuantity) {
  const candyRow = document.querySelector(`#candyTable tbody tr[data-id="${candyId}"]`);
  const quantityCell = candyRow.querySelector("td:nth-child(4)");
  quantityCell.textContent = newQuantity;
}
/*

function handleBuyButtonClick(event) {
   
        const candyId = event.target.getAttribute("data-id");
        const candyQuantity = parseInt(event.target.getAttribute("data-quantity"));
      
        if (candyQuantity >= 1) {
          const buttonIndex = Array.from(event.target.parentNode.children).indexOf(event.target); 
          const buttonValue = buttonIndex + 1; 
          const newQuantity = candyQuantity - buttonValue;
          updateCandyQuantity(candyId, newQuantity);
          updateCandyQuantityOnServer(candyId, newQuantity);
        }
      }

function updateCandyQuantityOnServer(candyId, newQuantity) {
  const apiUrl = "https://crudcrud.com/api/d9a01ca1d088409c90b2eae3a807b64e/candies"; 
  const updateUrl = `${apiUrl}/${candyId}`;
  
  axios
    .patch(updateUrl, { quantity: newQuantity })
    .then(response => console.log("Quantity updated successfully:", response.data))
    .catch(error => console.error("Error updating quantity:", error));
}
*/

function handleFormSubmit(event) {
  event.preventDefault();
  
  const nameInput = document.querySelector("#name");
  const descriptionInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const quantityInput = document.querySelector("#quantity");
  
  const candy = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: parseFloat(priceInput.value),
    quantity: parseInt(quantityInput.value)
  };
  
  addCandyToTable(candy);
  saveCandyToServer(candy);
  
 
  nameInput.value = "";
  descriptionInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";
}


function saveCandyToServer(candy) {
  const apiUrl = "https://crudcrud.com/api/d9a01ca1d088409c90b2eae3a807b64e/candies"; 
  axios
    .post(apiUrl, candy)
    .then(response => console.log("Candy saved successfully:", response.data))
    .catch(error => console.error("Error saving candy:", error));
}


document.querySelector("#candyForm").addEventListener("submit", handleFormSubmit);
document.querySelectorAll(".buyBtn").forEach(btn => btn.addEventListener("click", handleBuyButtonClick));
