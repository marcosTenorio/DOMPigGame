/**
 * John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
 * John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between
 * $50 and $200, and 10% if the bill is more than $100.
 * 
 * Implement a tip calculator using objects and loops:
 * 1. Create an object with an array for the bill values.
 * 2. Add a method to calculate the tip.
 * 3. This method should include a loop to iterate over all paid bills and to do the tip calculations.
 * 4. As an output, create 1) a new array containing all the tips, and 2) an array containing final paid
 * amounts (bill + tip).
 * 
 * Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $475, $110 and
 * $45.
 * Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and
 * $300, and 25% if the bill is more than $300.
 * 
 * 5. Implement the same functionality as before
 * 6. Create a function to calculate the average of a given array of tips
 * 7. Calculate the average tip for each family
 * 8. Log to the console which family paid the highest tips on average. 
 * 
 */

 var john = {
    fullname: 'John Smith',
    bill:[124, 48, 268, 180, 42],
    tips:[],
    total:[],
    average:0,
    calculator: function(){
        for(var i = 0; i < this.bill.length; i++){
            var percentage;
            var bill = this.bill[i];
            if(bill < 50){
                percentage = .2;
            }else if(bill >= 50 && bill < 200){
                percentage = .15;
            }else{
                percentage = .1;
            }
            this.tips[i] = (percentage * bill);
            this.total[i] = bill + (percentage * bill);
        }
    }
 };
 john.calculator();

 console.log('John\'s family tips = ' + john.tips);
 console.log('John\'s family total = ' + john.total);

 var mark = {
    fullname: 'Mark Adams',
    bill: [77, 475, 110, 45],
    tips: [],
    total: [],
    average:0,
    calculator: function(){
        for(var i = 0; i < this.bill.length; i++){
            var percentage;
            var bill = this.bill[i];
            if(bill < 100){
                percentage = .2;
            }else if(bill >= 100 && bill < 300){
                percentage = .1;
            }else{
                percentage = .25;
            }
            this.tips[i] = (percentage * bill);
            this.total[i] = bill + (percentage * bill);
        }
    }
 };

 mark.calculator();

 console.log('Mark\'s family tips = ' +mark.tips);
 console.log('Mark\'s family total = ' +mark.total);


 function calcAverage(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum / tips.length;
 }


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);


console.log(john);
console.log(mark);

 (calcAverage(john.tips) > calcAverage(mark.tips))  ? console.log('Johns family paid more tips') : console.log('Marks family paid more tips'); 