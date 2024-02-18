"use strict";

const form = document.getElementById('productForm');
const link = 'https://crudcrud.com/api/e34ea3687df34e34aecc519f0d3974f0/AddProduct';
const productList = document.querySelector('#productList');

form.addEventListener('submit', addProduct);

async function addProduct(event){
    event.preventDefault();

    const sellingPrice = document.getElementById("").value;
    const productName = document.getElementById("").value;
    const category = document.getElementById("").options[selectElements.selectedIndex].value;

    const product = {
        sellingPrice,
        productName,
        category,
    }
    localStorage.setItem(product.productName, JSON.stringify(product));
    displayProduct(product);

    try{
        const response = axios.post(link, product);
        displayProduct(response.data);

        event.target.elements.sellingPrice.value = '';
        event.target.elements.productName.value = '';
        event.target.elements.category.value = '';
    }
    catch(error){
        console.log(error)
    }
} 
function displayProduct(product){
    const dispValues = document.getElementById("formElements");

    const data = document.createElement("li");
    data.textContent = `${obj.amount} , ${obj.description} , ${obj.select}`;
    dispValues.appendChild(data);
}


// function displayProduct(product) {

//     const s = product.sellingPrice;
//     const p = product.productName;
//     const ca = product.category;
  
//     let newItem = document.createElement('li');
//     newItem.id = "ele";
//     newItem.appendChild(document.createTextNode(`${s}, ${p}`));
  
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
    
//     deleteButton.addEventListener('click', () => deleteProduct(product._id, newItem));
//     newItem.appendChild(deleteButton);
  
//     const categoryElement = document.getElementById(ca.replace(/ /g, '')); 
  
//     if (categoryElement) {
//       categoryElement.appendChild(newItem);
//     } 
//   }
  
  