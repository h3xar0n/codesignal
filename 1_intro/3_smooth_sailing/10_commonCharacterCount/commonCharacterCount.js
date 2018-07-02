function commonCharacterCount(s1, s2) {
  var alphabet1 = {};
  var alphabet2 = {};
  var output = 0;
  s1.split('').forEach(function(v) {
      if (v in alphabet1) {
          alphabet1[v]++;
      } else {
          alphabet1[v] = 1;
      }
  });
  s2.split('').forEach(function(v) {
      if (v in alphabet2) {
           alphabet2[v]++;
      } else {
          alphabet2[v] = 1;
      }
  });
  for (v in alphabet1) {
      if (v in alphabet2) {
          if (alphabet1[v] < alphabet2[v]) {
              output += alphabet1[v];
          } else {
              output += alphabet2[v];
          }
      }
  }
  return output;
}
