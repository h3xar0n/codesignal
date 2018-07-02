function sortByHeight(a) {
  var tip = a.length - 1;
  for (var i = 0; i <= tip; i++) {
    if (a[i] > -1) {
      for (var j = i + 1; j <= a.length; j++) {
        if (a[i] > a[j] && a[j] > -1) {
          console.log(a[i] + ' > ' + a[j]);
          var temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        } 
      }
    }
  }
  return a;
}