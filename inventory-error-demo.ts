// Error 1: Property 'category' does not exist on type 'Product'

interface Product {
    id: number;
    name: string;
    price: number;
}

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 55000
};

console.log(product.category);


// Error 2: Argument of type 'string' is not assignable to parameter of type 'number'

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

let total = calculateTotal("5000", 2);

console.log(total);