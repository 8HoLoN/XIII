;(function(_g){
  'use strict';
  function XIII(_v,_args){

    if (typeof this === 'undefined' ) {
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
    this.authorizeLargeNumber = _args.authorizeLargeNumber || false;
console.log('test',_v);
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

    for( var i=0 ; Math.floor((_v/(Math.pow(10,i)))) > 0 ; i++ ){

      _nTmp=Math.floor(_v/(Math.pow(10,i)))-Math.floor(_v/(Math.pow(10,i+1)))*10;

      if( _nTmp>3 ){
        if( _nTmp>4 && _nTmp<9 ){

          for( var j=0 ; j<_nTmp-5 ; j++ ){
            _ret=this.u[i*2]+_ret;
          }
          _ret=this.u[i*2+1]+_ret;
        }else{
          if( _nTmp==4 && i<3 ){_ret=this.u[i*2]+this.u[i*2+1]+_ret;}
          else if( _nTmp==9 && i<3 ){
            _ret=this.u[i*2]+this.u[i*2+2]+_ret;
          }
          else{
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
    return _ret;
  };

})(window);
