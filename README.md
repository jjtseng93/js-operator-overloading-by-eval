# Intro
- This small piece of code Overloads JavaScript arithmetic operators by evaluating expressions as strings
- My intention was to make operating Tensors easier so that JavaScript catches up with Python on Machine Learning and Artificial Intelligence
# Usage
- Since this is still in development, just copy the content of index.js directly and embed it into your code
- Example of use
```
let x=[1,2,3]
let y=[4,5,6]

AlgebraCalc("x+y")
// Expected: [5,7,9]

AlgebraCalc("2*x+1")
// Expected: [3,5,7]

AlgebraCalc("expression", { add: custom_addition_receiving_a_b, sub: custom_subtraction_receiving_a_b }, true)
// Override with your custom operator functions by the 2nd parameter
// set debug_mode to true to show every single calculation, e.g. 3,+,7

```
- Operands can only have names containing alphabets, numbers, underscores(_), dots(.)
- Operands cannot contain the word CalcExp
 
