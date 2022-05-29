/**
 * Accepted code.
 * 28/05/2022
 * 
 * https://leetcode.com/problems/two-sum
 **/


 function twoSum_mid(nums: number[], target: number): number[] {
    
    let json = {}
    
    for(let i = 0; i < nums.length; i++){
        json[nums[i]] = i;
    }
     for(let i = 0; i < nums.length; i++){
         let resto = target - nums[i];
         if(json[resto] && json[resto] != i){
             return [i, json[resto]]
         }
     }
     return []
    
 };