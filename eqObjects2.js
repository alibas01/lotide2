const eqObjects2 = function(a, b) {
  if (a === b) return true;
    
  if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
  let keysA = Object.keys(a), keysB = Object.keys(b);
  
  if (keysA.length != keysB.length) return false;
  
  for (let i = 0; i <= keysA.length -1; i++) {
       let key = keysA[i];
    if (!keysB.includes(key) || !eqObjects(a[key], b[key])) return false;
    }
  
    return true;
  }


module.exports = eqObjects2;