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
		unsigned int nbAra;
	public:
		static string u[];

	public:
		string getNb(void){return nb;}
		void setNb(string n){nb=n;}
	
	public:
		RNum();
		RNum(string);
		RNum(unsigned int);
		~RNum();
		
		unsigned int or2a(char);
		unsigned int r2a(string);
		string a2r(unsigned int);
		

		void print(void);
		
};

#endif //RNUM_H
