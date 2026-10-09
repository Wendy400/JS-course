

export function calculateTotalInterest(amount, interest, years)  {
   
   
    const interestTotal= (amount*interest*years) /100;
   return interestTotal;
    
}

console.log("Your interest is:" , + calculateTotalInterest(2000, 3,4))






