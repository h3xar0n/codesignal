function centuryFromYear(year)
  local included = true
  -- find years beyond increment of 100
  local spare = year % 100
  if spare > 0 then
    included = false 
  end
  -- the actual century
  local century = year / 100
  -- if the year is not a perfect increment of 100, to get the correct century, do not count past the year. 
  if included == true then
    century = century - 1
  end
  return century - (spare / 100) + 1
end
