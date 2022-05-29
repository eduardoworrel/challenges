/**
 * Accepted code.
 * 28/05/2022
 * 
 * https://leetcode.com/problems/two-sum
 **/


 function twoSum(nums: number[], target: number): number[] {
    
    let cursor_a = 0;
    let cursor_b = 0;
    
    for(cursor_a = 0;  cursor_a <= nums.length -1; cursor_a ++){
        for(cursor_b = 0;  cursor_b <= nums.length -1; cursor_b ++){
            if(cursor_a != cursor_b){      
                if(nums[cursor_a] + nums[cursor_b] == target){
                    return [cursor_a,cursor_b]
                }
            }
           
        }
       
        
    }
    return []
   
};