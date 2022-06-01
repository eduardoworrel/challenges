/**
 * Accepted code.
 * 01/06/2022
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 **/

function maxProfit(prices: number[]): number {
   
    let n = prices.length;
    let left = 0;
    let rigth = 1;
    let maxProfit = 0;
    if(n < 2){
        return 0;
    }
    
    while(rigth < n){
       if(prices[left] < prices[rigth]){
           let candidateToMaxValue = prices[rigth] - prices[left] 
           maxProfit = Math.max(candidateToMaxValue,maxProfit);
       }else{
           left = rigth
       }
        rigth++;
    }
    return maxProfit;
   
};