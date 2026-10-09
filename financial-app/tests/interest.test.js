
import {calculateTotalInterest} from "../src/interest.js";

describe("calculateTotalInterest", () => {
    it("calculates total interest by multiplying (amount* interest * years) then divide by 100 ", 
        () =>{
            const amount = 2000;
            const interest= 3;
            const years = 4;
            const interestTotal = calculateTotalInterest((amount*interest*years) / 100);
            expect (interestTotal) .toBe(240);

        });

    
    });

