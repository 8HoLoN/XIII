# XIII (C)
A library to handle Roman numerals in [JS](https://github.com/8HoLoN/XIII)/[C](https://github.com/8HoLoN/XIII/tree/master/C)/[C++](https://github.com/8HoLoN/XIII/tree/master/C%2B%2B)

## Include library
>```c
#include "XIII.h"

## Basic use

* By default, the supported range for Roman numerals is between 1 and 3999.

>```c
XIII* number = XIII_construct((XIII*)malloc (sizeof(XIII)),NULL,3984);
number->nbAra;                                                          // 3984
number->nb;                                                             // "MMMCMLXXXIV"
XIII_destruct(number);
```
>```c
XIII* number2 = XIII_construct((XIII*)malloc (sizeof(XIII)),"V",0);
number2->nbAra;                                                          // 5
number2->nb;                                                             // "V"
XIII_destruct(number2);
```
>```c
printf("%s\n",XIII_a2r(3984));                                          // "MMMCMLXXXIV"
printf("%d\n",XIII_r2a("VIII"));                                        // 8
