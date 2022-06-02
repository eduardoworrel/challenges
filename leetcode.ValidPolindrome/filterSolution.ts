/**
 * Accepted code.
 * 01/06/2022
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 **/

const alfaNum = 'qwertyuiopasdfghjklçzxcvbnm1234567890'
function isPalindrome(s: string): boolean {
    let ss = s.toLowerCase().split('')
    ss = ss.filter(a=>{
        return alfaNum.includes(a)
    })
    return ss.join('') === ss.reverse().join('')
};