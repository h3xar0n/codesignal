function makeArrayConsecutive2(statues)
  table.sort(statues, function(a, b) 
    return a < b
  end)

  checkSpace = 0
  neededStatues = 0

  for i = 1, table.getn(statues) - 1 do
    firstStatue = statues[i]
    nextStatue = statues[i + 1]
    checkSpace = (nextStatue - firstStatue) - 1
    if checkSpace > 0 then
      neededStatues = neededStatues + checkSpace
    end
  end
  return neededStatues
end