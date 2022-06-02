/**
 * Accepted code.
 * 01/06/2022
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 **/

 function maxProfit(prices: number[]): number {

    let len = prices.length;
    let left = 0;
    let rigth = 1;
    
    let maxProfit = 0;
    
    while(rigth < len){
        if(prices[left] <= prices[rigth]){
            maxProfit +=  prices[rigth] - prices[left]
        }
        rigth++
        left++
    }   
    return maxProfit 
};