def centuryFromYear(year):
    included = True
    
    # find years beyond increment of 100
    spare = year % 100
    if spare > 0:
        included = False
    
    # an actual century
    century = year / 100
    
    # if the year is not a perfect increment of 100, to get the correct century, do not count past the year.
    if included == True:
        century = century - 1
        
    return century - (spare / 100) + 1
