// This file contains intentional bad code for Baz testing
import { useState, useEffect } from 'react'; // unused imports
import { Button } from '../components/UI/button'; // unused import

// Bad function with multiple issues
export function calculateSomething(param1: any, param2: any, unusedParam: string): number {
    console.log("Debug: calculating something"); // debug code
    
    const x = 10; // magic number, bad name
    let temp = "data"; // unused variable
    const a = true; // unused variable, bad name
    
    // Overly complex logic with magic numbers
    let result = 0;
    for (let i = 0; i < 100; i++) { // magic number
        if (i % 2 === 0) { // could be extracted to function
            result += i * 1.5; // magic number
        } else {
            result += i * 0.8; // magic number
        }
        
        if (result > 1000) { // magic number
            console.log("Result exceeded threshold"); // debug code
            break;
        }
    }
    
    // Using param1 and param2 but ignoring unusedParam
    return result + param1 + param2;
}

// Function with inconsistent naming
export const bad_function_name = (input: number): string => {
    const CONSTANT_VALUE = 42; // unused constant
    console.log("Processing input:", input); // debug code
    
    if (input > 50) { // magic number
        return "high";
    } else if (input > 20) { // magic number
        return "medium";
    } else {
        return "low";
    }
};

// Class with multiple issues
export class BadClass {
    private value_with_underscore: number; // inconsistent naming
    private UnusedProperty: string; // unused property, wrong case
    
    constructor(initialValue: number, unusedParam: boolean) {
        this.value_with_underscore = initialValue;
        this.UnusedProperty = "unused";
        console.log("BadClass created"); // debug code
    }
    
    // Method with unused parameters
    public processData(data: any[], unusedFlag: boolean, anotherUnused: string): any[] {
        console.log("Processing data array"); // debug code
        
        const MAGIC_MULTIPLIER = 3.14; // magic number
        const temp = []; // bad variable name
        
        for (let i = 0; i < data.length; i++) {
            if (data[i] > 10) { // magic number
                temp.push(data[i] * MAGIC_MULTIPLIER);
            }
        }
        
        return temp;
    }
}

// Export with unused variable
const unusedExport = "this is never used";
export { unusedExport };