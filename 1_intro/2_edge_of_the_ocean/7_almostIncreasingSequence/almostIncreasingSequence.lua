function almostIncreasingSequence(sequence)
  needRemoval = 0
  len = table.getn(sequence)
  for i = 2, len do
    if sequence[i] <= sequence[i - 1] then
      needRemoval = needRemoval + 1
    end
    if needRemoval > 1 then
      return false
    end
    if (i >= 3) and (i < len) then
      if (sequence[i] <= sequence[i - 2]) and (sequence[i + 1] <= sequence[i - 1]) then
        return false
      end
    end
  end
  return true
end