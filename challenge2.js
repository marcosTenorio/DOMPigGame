/**
 * John and Mike both play basketball in different teams. In the latest 3 games, John's team scored
 * 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
 * 
 * 1. Calculate the average score for each team
 * 2. Decide which teams wins in average (highest average score), and print the winner
 * to the console. Also include the average score in the output.
 * 3. Then change the scored to show different winners.
 * 
 * 4. Mary also plays basketball, and her team scored 97, 134 and 105 points. Log the average winner
 * to the console 
 */



 let averageJohn = (89+120+103)/3;
 let averageMike = (116+94+123)/3;
 let averageMary = (97+134+105)/3;


 if (averageJohn > averageMike){
    console.log("John'\s team have a higher average score of "+ averageJohn + " points");
 }else if(averageJohn === averageMike){
     console.log("both team have the average score of "+ averageMike + " points");
 }else{
    console.log("Mike'\s team have a higher average score of "+ averageMike + " points");
 }


 
    if (averageJohn > averageMike && averageJohn > averageMary){
        console.log("John'\s team have a higher average score of "+ averageJohn + " points");
    }else if(averageMike > averageJohn && averageMike > averageMary){
        console.log("Mike'\s team have a higher average score of "+ averageMike + " points");
    }else if(averageMary > averageJohn && averageMary > averageMike){
        console.log("Mary'\s team have a higher average score of "+ averageMary + " points");
    }else{
        console.log("all teams have the average score of "+ averageMike + " points");
    }

    

 console.log(averageJohn, averageMary, averageMike);
