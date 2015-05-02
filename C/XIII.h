/**
 *
 * https://github.com/8HoLoN/XIII
 * @version: 0.21.00 ( April 2015 )
 * @author 8HoLoN / https://github.com/8HoLoN/
 * < 8holon [at] gmail.com >
 * Copyright (c) 2011-2015 Alexandre REMY
 */
#ifndef RNUM_H
#define RNUM_H

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

typedef struct {
  char* nb;
  int nbAra;
} XIII;

XIII* XIII_construct(XIII*,char* nb, int nbAra);
XIII* XIII_destruct(XIII* _xii);

int XIII_or2a(char);
int XIII_r2a(char*);
char* XIII_a2r(int);

char* concat(char *s1, char *s2, int mode);

char* XIII_getNb(void);
void XIII_setNb(char*);
void XIII_string(char*);

#endif //RNUM_H
