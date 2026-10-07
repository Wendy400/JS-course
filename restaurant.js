
const inventory = [ 
    { ingredient: "milk", quantity: 600 },
    { ingredient: "bread", quantity: 100 },
    { ingredient: "eggs", quantity: 400 },
    { ingredient: "cheese", quantity: 35 },
    { ingredient: "rice", quantity: 20 },
    { ingredient: "bacon", quantity: 300 },
    { ingredient: "beans", quantity: 150 },
]; 

const order = [
    { item: "milk", quantity: 2000 }, 
    { item: "bread", quantity: 4 }, 
    { item: "eggs", quantity: 10 }, 
    { item: "cheese", quantity: -1 }, 
    { item: "rice", quantity: 13 }
];

// Loop through each item in the order array directly
order.forEach(orderItem => {
    // Find the corresponding ingredient object in the inventory array
    const invItem = inventory.find(i => i.ingredient === orderItem.item);

    // Check if the item exists in inventory and if enough quantity is available
    if (invItem && invItem.quantity >= orderItem.quantity) {
        // Subtract the ordered quantity from the inventory
        invItem.quantity -= orderItem.quantity;
        
        console.log(`Your order of: ${orderItem.quantity} ${orderItem.item}(s) has been received successfully.\nKindly wait in the seating area for your order.`);
    }
    
     else {
        console.log(`Sorry, ${orderItem.item} is out of stock or insufficient quantity.`);
    }
});

console.log("\n--- Updated Inventory ---");
console.log(inventory);
