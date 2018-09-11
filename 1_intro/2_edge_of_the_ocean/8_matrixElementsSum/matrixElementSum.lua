function matrixElementsSum(matrix)
  r = 0
  for j = 1, table.getn(matrix[1]) do
    for i = 1, table.getn(matrix) do
      if matrix[i][j] == 0 then break
      else
        r = r + matrix[i][j]
      end
    end 
  end
  return r
end