function sumArr(a,b) {
  arr = []
  for (var i =0; i<a.length; i++){
    var aa = a[i]
    var bb = b[i]
    numa = parseInt(aa) 
    numb = parseInt(bb) 
    var sum = numa + numb
    var acc = sum.toString()
    arr.push(acc)
  }
  return arr
}

console.log(sumArr(['4','5','','7','8'],['1','2','','4','5']))