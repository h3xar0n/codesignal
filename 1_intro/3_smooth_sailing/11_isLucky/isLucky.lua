function isLucky(n)
  local firstHalfSum = 0
  local secondHalfSum = 0
  local serializedValues = {}
  for i=1, #n do
    serializedValues[i] = n[i]
  end
  local fullLength = table.getn(serializedValues)
  local firstHalf = fullLength / 2
  for i=1, firstHalf do
    firstHalfSum = firstHalfSum + serializedValues[i]
  end
  for i=firstHalf+1, fullLength do
    secondHalfSum = secondHalfSum + serializedValues[i]
  end
  if firstHalfSum == secondHalfSum then
    return true
  else
    return false
  end
end
