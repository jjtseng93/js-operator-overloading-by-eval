# Intro
- This small piece of code Overloads JavaScript arithmetic operators by evaluating expressions as strings
- My intention was to make operating Tensors easier so that JavaScript catches up with Python on Machine Learning and Artificial Intelligence
# Usage
- Since this is still in development, just copy [the content of index.js](https://github.com/jjtseng93/js-operator-overloading-by-eval/blob/main/index.js) directly and embed it into your code
- Example of use, or [LIVE DEMO HERE](https://jjtseng93.github.io/js-operator-overloading-by-eval/)
```
let x=[1,2,3]
let y=[4,5,6]

AlgebraCalc("x+y")
// Expected: [5,7,9]

AlgebraCalc("y**x")
// Expected: [4,25,216]

AlgebraCalc("2*x-1")
// Expected: [1,3,5]

AlgebraCalc("x**2+6/3")
// Expected: [3,6,11]

AlgebraCalc("expression", { add: custom_addition_receiving_a_b, sub: custom_subtraction_receiving_a_b }, true)
// Override with your custom operator functions by the 2nd parameter as objects
// set debug_mode to true to show every single calculation by alert, e.g. 3,+,7

```
- Operands can only have names containing alphabets, numbers, underscores(_), dots(.)
- Operands cannot contain the word CalcExp
 
