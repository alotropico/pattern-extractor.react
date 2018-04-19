// this function is only good
// for arrays with primitives of the same type
function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

export function parse(val, separator, regex, sort, unique, uppercase){

  if(uppercase) val = val.toUpperCase();

  var ret = [],
      parts = val.split('\n'),
      re = new RegExp(regex, "gi"),
      excludes = ['Wikidata:', 'redirect page'];

  parts.forEach(function(part, idx){

    var matches,
        exclude = false;

    excludes.forEach(function(e){
      if(part.indexOf(e) > -1)
        exclude = true;
    });

    if(!exclude && part)
      matches = part.match(re);

    if(matches)
      ret = ret.concat(matches);

  });

  if(separator === 'newline') separator = '\n';

  if(unique) ret = uniq(ret);

  if(sort) ret.sort();
  
  ret = ret.join(separator);

  return ret;
}