/**
 * Accepted code.
 * 03/06/2022
 * 
 * https://www.hackerrank.com/challenges/2d-array
 **/

'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function sum(left : number ,bottom: number ,arr: number[][]){
    return arr[bottom -1 ][left - 1 ] + arr[bottom -1 ][left] + arr[bottom -1 ][left + 1] + 
            arr[bottom][left] +
            arr[bottom + 1][left - 1 ] + arr[bottom + 1][left] + arr[bottom + 1][left + 1] 
}
function hourglassSum(arr: number[][]): number {
    // Write your code here
    let lines = 6
    let cols = 6
    
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let left = 1; left <= 4; left++){
        for(let bottom = 1; bottom <= 4; bottom++){
            maxSum = Math.max(sum(left, bottom, arr), maxSum)
        }    
    }    
    return maxSum
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    let arr: number[][] = Array(6);

    for (let i: number = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
