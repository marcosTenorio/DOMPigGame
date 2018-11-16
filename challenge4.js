/**
 * Let's remember the first challenge where Mark and John compared their BMI's.
 * let's now implement the same functionality with objects and methods.
 * 1. For each of them, create an object with properties for their full name,
 * mass, and height.
 * 2. Add a method to each object to calculate the BMI. Save the BMI to the 
 * object and also return it from the method.
 * 3. Log to the console who has the highest BMI, together with the full name and the BMI.
 * 
 */


 var john = {
    firstName: 'John',
    surname: 'Smith',
    mass: 88,
    height: 1.90,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
 };

 var mark = {
     firstName: 'Mark',
     surname: 'White',
     mass: 101,
     height: 2.00,
     calcBMI: function(){
         this.BMI = this.mass / (this.height * this.height);
         return this.BMI;
     }
 }



 if(john.calcBMI() > mark.calcBMI()){
    console.log(john.firstName + ' ' + john.surname + ' has a higher BMI of ' + john.BMI);
 }else if(john.BMI < mark.BMI){
     console.log(mark.firstName + ' ' + mark.surname + ' has a higher BMI of ' + mark.BMI);
 }else{
     console.log('both ' + john.firstName + ' ' + john.surname + ' and ' + mark.firstName + ' ' 
     + mark.surname + ' have the same BMI of ' + john.BMI);
 }
