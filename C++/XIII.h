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

#include <iostream>
#include <cmath>
#include <cstring>

using namespace std; 


class RNum {
	
	private:
		string nb;
		int nbAra;
	public:
		static string u[];

	public:
		string getNb(void){return nb;}
		void setNb(string n){nb=n;}
	
	public:
		RNum();
		RNum(string);
		RNum(int);
		~RNum();
		
		int or2a(char);
		int r2a(string);
		string a2r(int);
		

		void print(void);
		
	/*
	I	1
	V	5
	X	10
	L	50
	C	100
	D	500
	M	1000

	max 4999
	*/

};

#endif //RNUM_H
