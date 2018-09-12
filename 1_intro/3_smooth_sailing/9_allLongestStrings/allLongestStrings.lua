function allLongestStrings(inputArray)
  local countedArray = {}
  local longest = 1
  for i = 1, table.getn(inputArray) do
    local key = string.len(inputArray[i])
    if key >= longest then
      longest = key
      if countedArray[key] == nil then
        countedArray[key] = { inputArray[i] }
      else
        table.insert(countedArray[key], inputArray[i])
      end
    end
  end
  return countedArray[longest]
end