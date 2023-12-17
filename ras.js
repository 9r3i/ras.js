/**
 * ras ~ reparse array to string or likewise
 * authored by 9r3i
 * https://github.com/9r3i
 * started at november 29th 2021, on M51
 */
;function ras(){
/* version of ras */
this.version='1.0.0';
/* array of numbers --> to stringify hex string */
this.toHex=function(a){
  return JSON.stringify(Array.isArray(a)?a:new Array)
    .replace(/\d+/g,function(m){
    return String.fromCharCode(0x30)
      +String.fromCharCode(0x78)
      +parseInt(m,0x0a).toString(0x10);
  });
};
/* string --> to array of numbers */
this.toArray=function(a){
  if(typeof a!==(0x67e4c42c).toString(0x24)){return false;}
  var r=new Array,s=a.match(/[a-z0-9]+|[^a-z0-9]+/g);
  for(var i in s){
    if(s[i].match(/^[a-z0-9]+$/)){
      r.push(parseInt(s[i],0x24));
      continue;
    }var t=new Array;
    for(var o in s[i]){
      t.push(s[i].charCodeAt(o));
    }r.push(t);
  }return r;
};
/* array of numbers --> to string */
this.toString=function(a){
  if(null===a){return (0x10faa9).toString(0x24);}
  if(typeof a===(0x4ea3aa4c3df5).toString(0x24)){
    return (0x4ea3aa4c3df5).toString(0x24);
  }
  if(typeof a===(0x55f57d43).toString(0x24)
    ||typeof a===(0x67e4c42c).toString(0x24)
    ||typeof a===(0x5ec2b639f).toString(0x24)
    ||typeof a===(0x1213796ebd7).toString(0x24)
    ||typeof a===(0x297e2079).toString(0x24)
    ||typeof a===(0x686136a5).toString(0x24)){
    return a.toString(0x24);
  }
  var r=String.raw({raw:[]});
  if(typeof a===(0x57a71a6d).toString(0x24)){
    for(var i in a){
      if(Array.isArray(a[i])){
        for(var o in a[i]){
          r+=String.fromCharCode(a[i][o]);
        }continue;
      }r+=this.toString(a[i]);
    }
  }return r;
};
};


