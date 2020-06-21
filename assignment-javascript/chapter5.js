                // TASK 1
var num1=+prompt("Please enter first number");
var num2=+prompt("please enter second number");
var sum=num1+num2;
document.write("<h1>TASK1</h1>");
document.write("The sum of " +num1+ " and " +num2+ " is " + sum +"<br>");
                // TASK 2
var _subtract=num1-num2;
document.write("<h1>TASK2</h1>");
document.write("The subtract of " +num1+ " and " +num2+ " is " + _subtract+"<br>");
var _multiplication=num1*num2;
document.write("The multiplication of " +num1+ " and " +num2+ " is " + _multiplication+"<br>");
var _modulas=num1%num2;
document.write("The modulas of " +num1+ " and " +num2+ " is " + _modulas+"<br>");
                //TASK 3
var _abc;
document.write("<h1>TASK3</h1>");
document.write("Value after variable declaration is: " +_abc+ "<br>");
_abc=5;
document.write("Initial value: " +_abc+ "<br>");
++_abc;
document.write("Value after increment is: " +_abc+ "<br>");
_abcd=_abc+7;
document.write("Value after addition is: " +_abcd+ "<br>");
--_abcd;
document.write("Value after addition is: " +_abcd+ "<br>");
_abcde=_abcd%3;
document.write("The reminder is: " +_abcde+ "<br>");
                //TASK 4
var ticketPrice=600;
cost=5*ticketPrice;
document.write("<h1>TASK4</h1>");
document.write("The cost of buying 5 tickets to a movie is: " +cost+ "PKR"+"<br><br>");
                // TASK 5
var table = 4;
var count = 0;
document.write("<h1>TASK5</h1>");
document.write("Table of 4 <br>");
document.write( table + "  x " + ++count + " = " + table * count + "<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
document.write( table + "  x " + ++count + " = " + table * count +"<br>");
                // TASK 6
var aCelsius=25;
var aFarenheit=70;
var toFahrenheit=(aCelsius*9/5)+32;
var toCelcius=(aFarenheit-32)*5/9;
document.write("<h1>TASK6</h1>");
document.write(aCelsius+"<sup>o</sup>C is " +toFahrenheit+"<sup>o</sup>F<br>");
document.write(aFarenheit+"<sup>o</sup>F is " +toCelcius+"<sup>o</sup>C<br>");
                //TASK 7
var priceItem1=650;
var priceItem2=100;
var quantityItem1=3;
var quantityItem2=7;
var shippingCharges=100;
var totalCost=(priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of Item 1 is "+ priceItem1+"<br>");
document.write("Quantity of Item 1 is "+ quantityItem1+"<br>");
document.write("Price of Item 2 is "+ priceItem2+"<br>");
document.write("Quantity of Item 2 is "+ quantityItem2+"<br>");
document.write("Shipping Charges "+ shippingCharges+"<br><br>");
document.write("Total cost of your order is "+ totalCost+"<br>");
                //TASK 8
var totalMarks=980;
var obtainedMarks=804;
var percentage=obtainedMarks/totalMarks*100; 
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: "+ totalMarks+"<br>");
document.write("Marks obtained:" + obtainedMarks+"<br>");
document.write("Percentage:" +percentage+"%<br>");
                //TASK 9
var rateUSD=154.28;
var rateSR=41.11;
var totalPKR=(10*rateUSD)+(25*rateSR);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: "+totalPKR+"<br>");
                //TASK 10
var task10= 3;
var resultTask10= ((task10+5)*10)/2;
document.write("<h1>Task 10</h1>");
document.write("Result: "+resultTask10);
                //TASK 11
var currentYear=2020;
var birthYear=1997;
var age1=currentYear-birthYear-1;
var age2=currentYear-birthYear;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("They are either "+age1+ " or "+age2+" years old.");
                //TASK 12
var radius=20;
var pie=3.142;
var circumference=2*pie*radius;
var area=pie*radius*radius;
document.write("<h1>The Geometrizer</h1>");
document.write("The Radius of a circle: "+radius+"<br>");
document.write("The circumference is: "+circumference+"<br>");
document.write("The area is: "+area+"<br>");
                //TASK 13
var favSnack="chocolate chips"
var myAge=22;
var myMaxAge=65;
var snackPerDay=3;
var daysInYear=365;
var maxSupply=(myMaxAge-myAge)*3*daysInYear;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: "+favSnack+"<br>");
document.write("Current Age: "+myAge+"<br>");
document.write("Estimated Maximum Age: "+myMaxAge+"<br>");
document.write("Amount of snacks per day: "+snackPerDay+"<br>");
document.write("You will need "+maxSupply+" "+favSnack+" to last untill the ripe old age of "+myMaxAge+"<br>");
