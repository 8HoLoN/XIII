/*!* @preserve
 *
 * https://github.com/8HoLoN/XIII
 * @version: 0.20.00 ( April 2015 )
 * @author 8HoLoN / https://github.com/8HoLoN/
 * < 8holon [at] gmail.com >
 * Copyright (c) 2011-2015 Alexandre REMY
 */
;(function(_g){
  'use strict';
  function XIII(_v,_args){

    if (typeof this === 'undefined' || this === window ) {
      return new XIII(_v,_args).getOppositeNumerals();
    };

    _args = _args || {};
    if( typeof _v === 'object' ){
      _args = _v;
      _v = (typeof _args.value!=='undefined'?_args.value:'');
    }else{
      _v = (typeof _v!=='undefined'?_v:'');
    }

    this.u = ['I','V','X','L','C','D','M'];
    this.extendedMode = _args.extendedMode || false;
    this.largeNumberNotation = _args.largeNumberNotation || false;
    this.forceDoubleBarUse = _args.forceDoubleBarUse || false;

    if( (_v+'').match(/^[0-9]+$/) ){
      this.o = 0;
      this.aN = _v;
      this.rN = this.a2r(_v);
    }else if( _v.match(/^[IVXLCDM]+$/) ){
      this.o = 1;
      this.rN = _v;
      this.aN = this.r2a(_v);
    }else{
      this.rN = 'I';
      this.aN = 1;
    }

    this.strictMode = false;

  }

  _g.XIII = XIII;

  XIII.prototype.getArabicNumerals = function() {
    return this.aN;
  };

  XIII.prototype.getRomanNumerals = function() {
    return this.rN;
  };

  XIII.prototype.getOppositeNumerals = function() {
    return this.o?this.aN:this.rN;
  };

  XIII.prototype.or2a = function(_v) {
    var _ret = 1;
    for( var i = 0 ; i < 7 ; i++ ){
      if( _v == this.u[i]){
        _ret=(Math.pow(10,i-(i>>>1))*((~i&0x1)+1))>>>1;
      }
    }
    return _ret;
  };

  XIII.prototype.r2a = function(_v) {
    var _ret = 1;
    var _last = 0;
    var _tot = 0;

    _ret = this.or2a(_v[0]);
    _last = _ret;
    for( var i=1,l=_v.length ; i < l ; i++ ){

      _ret = this.or2a(_v[i]);

      if( _ret <= _last ){
        _tot += _last;
      }else{
        _tot += _ret-_last;
        _ret=0;
        if( i+1<_v.length ){_ret=this.or2a(_v[++i]);}
      }

      _last = _ret;
    }
    _tot += _last;
    return _tot;
  };

  XIII.prototype.a2r = function(_v) {
    var _ret='';
    var _nTmp=0;

    if( _v <= 3999 || (_v <= 4999 && this.extendedMode) ){

      for( var i=0 ; Math.floor(_v/(Math.pow(10,i))) > 0 ; i++ ){

        _nTmp=Math.floor(_v/(Math.pow(10,i)))-Math.floor(_v/(Math.pow(10,i+1)))*10;

        if( _nTmp>3 ){
          if( _nTmp>4 && _nTmp<9 ){
            for( var j=0 ; j<_nTmp-5 ; j++ ){
              _ret=this.u[i*2]+_ret;
            }
            _ret=this.u[i*2+1]+_ret;
          }else{
            if( i<3 ){
              if( _nTmp==4 ){_ret=this.u[i*2]+this.u[i*2+1]+_ret;}
              else if( _nTmp==9 ){_ret=this.u[i*2]+this.u[i*2+2]+_ret;}
            }else{
              for(var j=0 ; j<_nTmp ; j++){
                _ret=this.u[i*2]+_ret;
              }
            }
          }
        }else{
          for(var j=0 ; j<_nTmp ; j++){
            _ret=this.u[i*2]+_ret;
          }
        }

      }

    }else{// [5000;4999999]
      var _arr=[];
      var _u = _v - Math.floor(_v/1e3)*1e3;
      _arr.unshift(this.a2r(_u));

      var _m = Math.floor(_v/1e3);
      if( _v <= 3999999 || (_v <= 4999999 && this.extendedMode) ){
        _arr.unshift(this.a2r(_m).replace(/(.)/g,'$1\u0305'));
      }else{
        _m -= Math.floor(_v/1e6)*1e3; // only if > 4 999 999 => not MMMM bar
        _arr.unshift(this.a2r(_m).replace(/(.)/g,'$1\u0305'));
        //_m = this.a2r(_m)+'\u00B7M';// •M [5000;4999999]

        var _mm = Math.floor(_v/1e6);

        if( _v <= 3999999999 || (_v <= 4999999999 && this.extendedMode) ){
          _arr.unshift(this.a2r(_mm).replace(/(.)/g,'$1\u033F'));
        }else{
          _mm -= Math.floor(_v/1e9)*1e3;// only if > 4 999 999 999 => not MMMM bar
          _arr.unshift(this.a2r(_mm).replace(/(.)/g,'$1\u033F'));

          // use 1e5 previous level
          var _mmm = Math.floor(_v/1e9);// max number 499,999,999,999
          _mmm = this.a2r(_mmm*10).replace(/(.)/g,'$1\u033F');
          _mmm = (_mmm!=''?'|'+_mmm+'|':_mmm);
        }

      }

      return _arr.join('');
      //return 'max exceed';
    }

    return _ret;
  };

})(window);
