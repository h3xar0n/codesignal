function commonCharacterCount(s1, s2)
  local alphabet1 = {}
  local alphabet2 = {}
  local output = 0
  stringCount(s1, alphabet1)
  stringCount(s2, alphabet2)
  for char, count in alphabet1 do
    if alphabet2[char] ~= nil then
      if alphabet1[char] < alphabet2[char] then
        output = output + alphabet1[char]
      else
        output = output + alphabet2[char]
      end
    end
  end
  return output
end

function stringCount(string, alphabet)
  for character in string:gmatch"." do
    if alphabet[character] ~= nil then
      alphabet[character] = alphabet[character] + 1
    else
      alphabet[character] = 1
    end
  end
end