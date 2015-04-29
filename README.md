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

* By default, the supported range for Roman numerals is between 1 and 3999.

>```javascript
var number = new XIII(2);
number.getRomanNumerals();            // "II"
number.getArabicNumerals()            // 2
```
>```javascript
var number = new XIII("IV");
number.getRomanNumerals();            // "IV"
number.getArabicNumerals()            // 4

* Calling the library as a regular function (i.e. without the new operator) will return the equivalent transformed value.

>```javascript
XIII("XVII");                         // 17
XIII("4");                            // "IV"

* By default, the library is permissive, so a mistype number will be corrected.

>```javascript
var number = new XIII("IIII");
number.getRomanNumerals();            // "IV"
number.getArabicNumerals();           // 4
```

* Enable the extended mode.

>```javascript
var number = new XIII({
  value:4367,
  extendedMode:true
});
number.getRomanNumerals();            // "MMMMCCCLXVII"
XIII(4367);                           // "I̅V̅CCCLXVII"
```
>```javascript
XIII(4900900,{extendedMode:true});    // "M̅M̅M̅M̅C̅M̅CM"
XIII(4900900);                        // "I̿V̿C̅M̅CM"
```
>```javascript
XIII(4999999999);                     // RangeError: Parameter must be between 1 and 3999999999
XIII(4999999999,{extendedMode:true}); // "M̿M̿M̿M̿C̿M̿X̿C̿I̿X̿C̅M̅X̅C̅I̅X̅CMXCIX"
XIII(49999999999,{
  forceSideBarsUse:true,
  extendedMode:true
});                                   // "|M̿M̿M̿M̿C̿M̿X̿C̿|X̿C̿I̿X̿C̅M̅X̅C̅I̅X̅CMXCIX"


* Enable the strict mode.

>```javascript
XIII("IIII",{strictMode:true});       // false

