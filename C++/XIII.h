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

#include <iostream>
#include <cmath>
#include <cstring>

using namespace std; 


class XIII {
	
	private:
		string nb;
		unsigned int nbAra;
	public:
		static string u[];

	public:
		string getNb(void){return nb;}
		void setNb(string n){nb=n;}
	
	public:
		XIII();
		XIII(string);
		XIII(unsigned int);
		~XIII();
		
		unsigned int or2a(char);
		unsigned int r2a(string);
		string a2r(unsigned int);
		

		void print(void);
		
};

#endif //XIII_H
