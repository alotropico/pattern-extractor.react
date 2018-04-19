const excludes = ['Wikidata:', 'redirect page'];

function getIdentifiers(s){

  var re = /(Q|P)\d+/gi,
  m,
  ret = [];

while ( (m = re.exec(s)) ) {
  ret.push(m[0]);
}

if(ret.length)
  return ret;
else
  return false;
}

// this function is only good
// for arrays with primitives of the same type
function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

export function parseText(val){

  var ret = [],
      parts = val.split('\n');

  parts.forEach(function(p, idx){

    var id,
        exclude = false;

    excludes.forEach(function(e){
      if(p.indexOf(e) > -1)
        exclude = true;
    });

    if(!exclude && p)
      id = getIdentifiers(p);

    if(id)
      ret = ret.concat(id);

  });

  var sep = 'newline';

  if(sep === 'newline') sep = '\n';

  console.log(ret);

  return uniq(ret).join(sep);
}