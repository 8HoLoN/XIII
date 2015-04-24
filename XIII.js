;(function(_g){

  function XIII(_v,_args){
    _args = _args || {};
    if( typeof _v === 'object' ){
      _args = _v;
      _v = _args.value || '';
    }else{
      _v = _v || '';
    }

    this.u = ['I','V','X','L','C','D','M'];
    this.extendedMode = _args.extendedMode || false;

    if( (_v+'').match(/^[0-9]+$/) ){
      this.aN = _v;
      this.rN = this.a2r(_v);
    }else if( _v.match(/^[IVXLCDM]+$/) ){
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

  XIII.prototype.or2a = function(_v) {
    var _ret = 1;
    for( var i = 0 ; i < 7 ; i++ ){
      if( _v == this.u[i]){
        //_ret=(Math.pow(10,i-(i>>>1))*(((i+1)%2)+1))>>>1;
        _ret=(Math.pow(10,i-(i>>>1))*((~i&0x1)+1))>>>1;
      }
    }
    return _ret;
  };

  XIII.prototype.r2a = function(_v) {
    var ret = 1;
    var last = 0;
    var tot = 0;

    ret = this.or2a(_v[0]);
    last = ret;
    for( var i=1,l=_v.length ; i < l ; i++ ){

      ret = this.or2a(_v[i]);

      if( ret <= last ){
        tot += last;
      }else{
        tot += ret-last;
        ret=0;
        if( i+1<_v.length ){ret=this.or2a(_v[++i]);}
      }

      last = ret;
    }
    tot += last;
    return tot;
  };

  XIII.prototype.a2r = function(_v) {
    var ret="";
    var nTmp=0;

    for(var i=0 ; Math.floor((_v/(Math.pow(10,i)))) > 0 ; i++){

      nTmp=Math.floor(_v/(Math.pow(10,i)))-Math.floor(_v/(Math.pow(10,i+1)))*10;

      if( nTmp>3 ){
        if( nTmp>4 && nTmp<9 ){

          for(var j=0 ; j<nTmp-5 ; j++){
            ret=this.u[i*2]+ret;
          }
          ret=this.u[i*2+1]+ret;
        }else{
          console.log(nTmp);
          if( nTmp==4 && i<3 ){ret=this.u[i*2]+this.u[i*2+1]+ret;}
          else if( nTmp==9 && i<3 ){
            ret=this.u[i*2]+this.u[i*2+2]+ret;
          }
          else{
            for(var j=0 ; j<nTmp ; j++){
              ret=this.u[i*2]+ret;
            }
          }
        }
      }else{
        for(var j=0 ; j<nTmp ; j++){
          ret=this.u[i*2]+ret;
        }
      }
    }
    return ret;
  };

})(window);
