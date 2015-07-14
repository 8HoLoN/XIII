# XIII (C++)
A library to handle Roman numerals in [JS](https://github.com/8HoLoN/XIII)/[C](https://github.com/8HoLoN/XIII/tree/master/C)/[C++](https://github.com/8HoLoN/XIII/tree/master/C%2B%2B)

## Include library
>```c++
#include "XIII.h"

## Basic use

* By default, the supported range for Roman numerals is between 1 and 3999.

>```c++
XIII c(3984);                         // MMMCMLXXXIV
XIII c("VIII");                       // 8
```
>```c++
XIII t;
t.a2r(3984);                          // MMMCMLXXXIV
t.r2a("VIII");                        // 8
```
