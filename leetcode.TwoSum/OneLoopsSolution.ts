/**
 * Accepted code.
 * 28/05/2022
 * 
 * https://leetcode.com/problems/two-sum
 **/


 function twoSum(nums: number[], target: number): number[] {
    
  
    let json = {}
   
    for(let i = 0; i < nums.length; i++){
        let resto = target - nums[i];
        if(json[resto] != null){
             return [i, json[resto]]
         }
         json[nums[i]] = i;
    }
     return []
    
 };