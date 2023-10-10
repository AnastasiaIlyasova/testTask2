class Product {
    constructor(id, price) {
        this.id = id
        this.price = price
    }
    setPrice(price) {
        this.price = price
        return this
    }
    withDiscount(percent) {
        this.discountedPrice = this.price - this.price / 100 * percent;
        return this
    }
}

class Shop {
    constructor() {
        this.products = []
    }
    addProducts(products) {
        this.products = products.map(product => new Product(product.id, product.price))
        return this.products
    }
    getProduct(id) {
        this.id=id
        for(let i=0; i<=this.products.length; i++){
            if(this.id === this.products[i].id){
                return this.products[i]
            }
        }
    }
}

var products = [
    {
        "id": 3,
        "name": "Cake",
        "price": 333,
        "description": "The tastiest cake in the world."
    },
    {
        "id": 5,
        "name": "Petroleum",
        "price": 2977,
        "description": "Black gold."
    },
    {
        "id": 8,
        "name": "Moscow metro logo",
        "price": 117000000,
        "description": "Remove circle from logo"
    }
];

var shop = new Shop();
shop.addProducts(products);

console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);
