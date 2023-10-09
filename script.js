let currentProduct

class Product{
    constructor(id, price) {
        this.id = id
        this.price = price
    };
  setPrice(price){
        this.price = price
        return currentProduct
   };
    withDiscount(percent){
        this.percent = percent;
        currentProduct.discountedPrice = currentProduct.price - currentProduct.price / 100 * percent;
        return currentProduct
    };
}

const stuff1 = new Product(3, 333)
const stuff2 = new Product(5, 2977)
const stuff3 = new Product(8,117000000)

const products = [stuff1, stuff2, stuff3];

class Shop extends Product{
    constructor(id, price, products) {
        super(id, price)
    }
    addProducts(products){

    }
    getProduct(id){
        this.id=id
        for(let i=0; i<=products.length;i++){
            if(this.id === products[i].id){
                 currentProduct = products[i]
                return currentProduct
            }
        }
    }
}
var shop = new Shop();

console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);

