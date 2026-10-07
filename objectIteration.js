const customer = { 
    name: "John Doe", 
    age: 30, 
    email: "john.doe@example.com", 
    isActive: true ,

    name: "John Doe", 
    age: 30, 
    email: "john.doe@example.com", 
    isActive: true 
}; 

// Using Object.keys() to iterate over property keys 
Object.keys(customer).forEach(key => { 
    console.log(`${key}: `); 
}); 



//Using Object.values() to iterate over property values
Object.values(customer).forEach(value => { 
    console.log(`${value} `); 
});