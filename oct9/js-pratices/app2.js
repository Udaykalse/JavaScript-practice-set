function maxProfit(prices) {
    let minPrice=Infinity,maxProfit=0;
    for(let price of prices){
        minPrice=Math.min(minPrice,price);
        maxProfit=Math.max(maxProfit,price-minPrice);

    }

    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]));