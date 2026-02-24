//Logic

/*1)take array input as a function
2)Find shortest number (lowest value) and its Position(day)
3)Not find largest number (highest value) iteration from lowest value position 
4)if largest > lowest return lastest-lowest as profit , else return 0 */

function getProfit(price:number[]):number{
let profit:number=-1;

let minPurchasePrice=getMinValue(price);
let smallestNumIndex= price.indexOf(minPurchasePrice);
let maxPurchasePrice=getMaxValue(price,smallestNumIndex);


if(maxPurchasePrice > minPurchasePrice ){
    profit=maxPurchasePrice-minPurchasePrice;
}else{
    profit=0;
}

return profit;
}

function getMinValue(price:number[]):number{
let smallestNum:number=price[0];
for (let index = 0; index < price.length-1; index++) {
   if(smallestNum>price[index+1]){
smallestNum=price[index+1];
   } 
}
return smallestNum;
}

function getMaxValue(price:number[] , minIndex:number):number{
let largestNumber:number=price[0];
for (let index = minIndex; index < price.length-1; index++) {
   if(largestNumber<price[index+1]){
largestNumber=price[index+1];
   } 
}
return largestNumber;
}

let priceInput:number []=[7,1,5,3,6,4];
console.log(getProfit(priceInput));