/**
 *
 * https://github.com/8HoLoN/XIII
 * @version: 0.21.00 ( April 2015 )
 * @author 8HoLoN / https://github.com/8HoLoN/
 * < 8holon [at] gmail.com >
 * Copyright (c) 2011-2015 Alexandre REMY
 */
#include "XIII.h"

char XIII_u[]="IVXLCDM";

XIII* XIII_construct(XIII* _xii, char* _nb, unsigned int _nbAra){
	if( _nb!=NULL ){
		_xii->nb=_nb;
		_xii->nbAra=XIII_r2a(_nb);
	}else if( _nbAra!=0 ){
		_xii->nbAra=_nbAra;
		_xii->nb=XIII_a2r(_nbAra);
	}else{
		_xii->nbAra=1;
		_xii->nb=(char*)malloc (sizeof(char)+1);
		_xii->nb[0]='I';
		_xii->nb[0]='\0';
	}
	
	return 	_xii;
}
XIII* XIII_destruct(XIII* _xii){
	free(_xii->nb);
	_xii->nb=NULL;
	
	free(_xii);
	_xii=NULL;
	return _xii;
}
unsigned int XIII_or2a(char n){
	unsigned int ret=1,j=0;
	for(j=0;j<7;j++){
		if(n==XIII_u[j]){
			ret=((unsigned int)floor(pow(10.,j-(j>>1)))*((~j&0x01)+1))>>1;
		}
	}
	return ret;
}
unsigned int XIII_r2a(char* n){
	unsigned int ret=1;//0ou1
	unsigned int last=0;
	unsigned int tot=0;
	unsigned int i=0;
	
	ret=XIII_or2a(n[0]);
	last=ret;
	for(i=1 ; i<strlen(n) ; i++){
		
		ret=XIII_or2a(n[i]);
		
		if(ret<=last){
			tot=tot+last;
		}else{
			tot=tot+(ret-last);
			ret=0;
			if(i+1<strlen(n)){ret=XIII_or2a(n[++i]);}
		}
		
		last=ret;	
	}
	tot=tot+last;
	return tot;
}
char* XIII_a2r(unsigned int n){//ok [0-3999]
	char* ret=(char*)malloc (sizeof(char)*1);
	strcpy(ret, "");
	unsigned int nTmp=0,i=0,j=0;
	
	for(i=0 ; (n/(unsigned int)floor(pow(10.,i))) > 0 ; i++){
		
		nTmp=(n/(unsigned int)floor(pow(10.,i)))-(n/(unsigned int)floor(pow(10.,i+1)))*10;

		if(nTmp>3){
			if(nTmp>4 && nTmp<9){
				
				for(j=0;j<nTmp-5;j++){
					ret=concat(&XIII_u[i*2],ret,2);
				}
				ret=concat(&XIII_u[i*2+1],ret,2);
			}else{
				if(nTmp==4){ret=concat(&XIII_u[i*2],concat(&XIII_u[i*2+1],ret,2),2);}
				else{ret=concat(&XIII_u[i*2],concat(&XIII_u[i*2+2],ret,2),2);}
			}			
		}else{
			for(j=0;j<nTmp;j++){
				ret=concat(&XIII_u[i*2],ret,2);
			}
		}
	}
	return ret;
}
char* concat(char *s1, char *s2, int mode){
	if(mode==2){// add a single char to char*
		if(strlen(s2) + 1 >= 100) {
			return NULL;
		}
		char* _s1 = (char*)malloc(sizeof(char)*1+strlen(s2)+1);
		_s1[0]=s1[0];
		_s1[1]='\0';
		strcat(_s1, s2);
		free(s2);
		return _s1;
	}else if(mode==4){
		strcat(s2, s1);
		return s2;
	}else{
		char *result = malloc(strlen(s1)+strlen(s2)+1);//+1 for the zero-terminator
	    // check for errors in malloc here
	    strcpy(result, s1);
	    strcat(result, s2);
	    return result;	
	}
    
}
