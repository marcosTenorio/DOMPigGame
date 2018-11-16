/**
 * John and his family went on a hiliday and went to 3 different restaurants
 * The bills were $124, $48 and $ 268.
 * 
 * To tip the waiter a fair amount, John created a simple calculator.
 * He likes to tip 20% if he bill is less than $50, 15% if the bill is between
 * $50 and $200, and 10% if the bill is more than $200.
 * 
 * In the end John would like to have 2 arrays:
 * 1) Containing all 3 tips(one for each bill)
 * 2) Containing all 3 final paid amounts 
 */


 function calculator(bill){
     var percentage;
     if (bill <50){
         percentage = 0.20;
     }else if(bill >=50 && bill <= 200){
        percentage = 0.15;
     }else{
        percentage = 0.10
     }
     return percentage * bill;
 } 

 var bills = [124,48, 268];

 var tips = [calculator(bills[0]), calculator(bills[1]), calculator(bills[2])];

 var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

 
 console.log(tips, total);


