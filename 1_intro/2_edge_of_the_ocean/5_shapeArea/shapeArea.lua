function shapeArea(n)
  res = 1
  for i = 0, n - 1 do
    res = res + (4 * i)
  end
  return res
end