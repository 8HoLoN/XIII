/**
 *
 * https://github.com/8HoLoN/XIII
 * @version: 0.21.00 ( April 2015 )
 * @author 8HoLoN / https://github.com/8HoLoN/
 * < 8holon [at] gmail.com >
 * Copyright (c) 2011-2015 Alexandre REMY
 */
#ifndef XIII_H
#define XIII_H

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

typedef struct {
  char* nb;
  unsigned int nbAra;
} XIII;

XIII* XIII_construct(XIII* _xii,char* nb,unsigned int nbAra);
XIII* XIII_destruct(XIII* _xii);

unsigned int XIII_or2a(char);
unsigned int XIII_r2a(char*);
char* XIII_a2r(unsigned int);

char* concat(char *s1, char *s2, int mode);

#endif //XIII_H
