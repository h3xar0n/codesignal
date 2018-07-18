function addBorder(picture) {
  var longest = 0;
  for (var i = 0; i < picture.length; i++) {
      if (picture[i].length > longest) {
          longest = picture[i].length;
      }
      picture[i] = '*' + picture[i] + '*';
  }
  var borderLength = 2 + longest;
  var j = 0;
  var border = [];
  while (j < borderLength) {
      border.push('*');
      j++;
  }  
  border = border.join('');
  picture.unshift(border);
  picture.push(border);
  return picture;
}
