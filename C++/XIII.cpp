/**
 *
 * https://github.com/8HoLoN/XIII
 * @version: 0.21.00 ( April 2015 )
 * @author 8HoLoN / https://github.com/8HoLoN/
 * < 8holon [at] gmail.com >
 * Copyright (c) 2011-2015 Alexandre REMY
 */
#include "XIII.h"

string RNum::u[]={"I","V","X","L","C","D","M"};

RNum::RNum(){
	nb="I";
	nbAra=1;
}
RNum::RNum(string n){
	nb=n;
	nbAra=r2a(n);
}
RNum::RNum(unsigned int n){
	nb=a2r(n);
	nbAra=n;
}
RNum::~RNum(){

}
unsigned int RNum::or2a(char n){
	unsigned int ret=1;

	for(unsigned int j=0;j<7;j++){
		if(n==u[j][0]){
			ret=((unsigned int)floor(pow(10.,j-(j>>1)))*((~j&0x01)+1))>>1;
		}
	}
	return ret;
}
unsigned int RNum::r2a(string n){
	unsigned int ret=1;//0ou1
	unsigned int last=0;
	unsigned int tot=0;
	
	ret=or2a(n[0]);
	last=ret;
	for(unsigned int i=1 ; i<n.size() ; i++){
		
		ret=or2a(n[i]);
		
		if(ret<=last){
			//tot=tot+ret;
			tot=tot+last;
			//cout
		}else{
			//tot=ret-last;
			tot=tot+(ret-last);
			ret=0;
			if(i+1<n.size()){ret=or2a(n[++i]);}
		}
		
		last=ret;	
	}
	tot=tot+last;
	return tot;
}
string RNum::a2r(unsigned int n){//ok [0-3999]
	string ret="";
	unsigned int nTmp=0;

	for(unsigned int i=0 ; (n/((unsigned int)floor(pow(10.,i)))) > 0 ; i++){
		
		nTmp=(n/((unsigned int)floor(pow(10.,i))))-(n/((unsigned int)floor(pow(10.,i+1))))*10;
		//cout<< "nTmp" << nTmp << endl;
		//cout<< "nTmp" << ((unsigned int)floor(pow(10.,i+1))) << endl;
		if(nTmp>3){
			if(nTmp>4 && nTmp<9){
				
				for(unsigned int j=0;j<nTmp-5;j++){
					ret=RNum::u[i*2]+ret;
				}
				ret=RNum::u[i*2+1]+ret;
			}else{
				if(nTmp==4){ret=RNum::u[i*2]+RNum::u[i*2+1]+ret;}
				else{ret=RNum::u[i*2]+RNum::u[i*2+2]+ret;}
			}			
		}else{
			for(unsigned int j=0;j<nTmp;j++){
				ret=RNum::u[i*2]+ret;
			}
		}
	}
	return ret;
}
void RNum::print(void){
	cout << nb << ":" << nbAra ;
}
