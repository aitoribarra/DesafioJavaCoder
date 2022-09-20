//Inventario de productos
//Conectarlos a un carrito

class Productos {
    constructor(id, name, price, img, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = quantity;
    }
}

const cartProducts = [];

const prod1 = new Productos("1", "Ansul 30", 11200, "src/images/commodities-urea-perlada-630x315.jpg", 1);
const prod2 = new Productos("2", "Nitro C", 11900, "src/images/chacarero-ansul-630x315.jpg", 3);
const prod3 = new Productos("3", "Urea Perlada", 11800, "src/images/chacarero-ansca-630x315.jpg, 2");
const prod4 = new Productos("4", "Urea Granulada", 11100, "src/images/commodities-sulfato-de-amonio-630x315.jpg");

cartProducts.push(prod1, prod2, prod3, prod4);
//console.log(cartProducts)

//Creando funcion para mostrar los productos

const showProducts = (products) => {
    const productContainer = document.getElementById("product-container");
    console.log(productContainer)
    products.forEach(product => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card" style="width:18rem;">
                            <img src="${product.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">Price:$ ${product.price}</p>
                                <p id="quantity" class="card-text">${product.quantity}</p>
                                <button class="btn btn-primary" id="button${product.id}">Add to Cart</button>
                            </div>
                        </div>`
        productContainer.appendChild(card);

        const button = document.getElementById(`button${product.id}`);
        button.addEventListener('click', () =>{
            cartProducts(`${product.id}`);
            alert 
        });
    })
} 