function adjacentElementsProduct(inputArray)
  len = table.getn(inputArray)
  biggest = inputArray[1] * inputArray[2]
  if len == 2 then 
    return biggest 
  end
  second = inputArray[2] * inputArray[3]  
  if biggest < second then
    biggest = inputArray[2] * inputArray[3]
    second = inputArray[1] * inputArray[2]
  end
  for i=3,len-1 do
    check = inputArray[i] * inputArray[i+1]
    if check > biggest then
      second = biggest
      biggest = check
    elseif check > second then
      second = check
    end
  end
  return biggest
end