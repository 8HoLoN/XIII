# XIII
A library to handle Roman numerals

## Reminder of the bases

>```
I : 1
V : 5
X : 10
L : 50
C : 100
D : 500
M : 1000

## Basic use

By default, the supported range for Roman numerals is between 1 and 3999.

>```javascript
var number = new XIII(2);
number.getRomanNumerals();      // "II"
number.getArabicNumerals()      // 2
>```javascript
var number = new XIII("IV");
number.getRomanNumerals();      // "IV"
number.getArabicNumerals()      // 4

Calling the library as a regular function (i.e. without the new operator) will return the equivalent transformed value.

>```javascript
XIII('XVII');                   // 17
XIII('4');                      // "IV"
