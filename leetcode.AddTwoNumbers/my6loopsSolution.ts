/**
 * Accepted code.
 * 28/05/2022
 * 
 * https://leetcode.com/problems/add-two-numbers/
 **/


/**
 * Definition for singly-linked list.
 **/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const list : number[] = [] 
    let acumulado = 0
    
    let sum = l1.val + l2.val 

    while(sum >= 10){
            acumulado ++
            sum = sum - 10
    }
    
    list.push(sum)
    
    while(l1.next || l2.next){
        l1 = l1.next ?? new ListNode(0)
        l2 = l2.next ?? new ListNode(0)
        sum = acumulado + l1.val + l2.val 
        acumulado = 0
        while(sum >= 10){
            acumulado ++
            sum = sum - 10
        }
        list.push(sum)
    }

    if(acumulado > 0){
        sum = acumulado
        acumulado = 0
        do{
          while(sum >= 10){
               acumulado ++
               sum = sum - 10
          }   
          list.push(sum)
        }while(acumulado > 0)
    }
    let currentNode = null;

    for(let i = list.length - 1; i >= 0; i--){
        if(!currentNode){
            currentNode = new ListNode(list[i], null)
        }else{
            currentNode = new ListNode(list[i], currentNode)
        }
    }
    return currentNode
};