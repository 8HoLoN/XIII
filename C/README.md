# XIII (C)
A library to handle Roman numerals

## Include library
>```c
#include "XIII.h"

## Basic use

* By default, the supported range for Roman numerals is between 1 and 3999.

>```c
XIII* number = XIII_construct((XIII*)malloc (sizeof(XIII)),NULL,3984);
number->nbAra;                                                          //
number->nb;                                                             // MMMCMLXXXIV
XIII* number2 = XIII_construct((XIII*)malloc (sizeof(XIII)),"V",0);
number->nbAra;                                                          //
number->nb;                                                             //
```
