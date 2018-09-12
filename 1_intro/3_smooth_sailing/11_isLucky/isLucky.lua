function isLucky(n)
  local firstHalfSum = 0
  local secondHalfSum = 0
  number = tostring(n)
  halfpoint = string.len(number) / 2
  for i = 1, halfpoint do
    firstHalfSum = firstHalfSum + string.sub(number, i, i)
  end
  for i = halfpoint + 1, string.len(number) do
    secondHalfSum = secondHalfSum + string.sub(number, i, i)
  end
  if firstHalfSum == secondHalfSum then
    return true
  else
    return false
  end
end
