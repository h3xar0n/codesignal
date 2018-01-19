function centuryFromYear(year) {
    var included = true
    // find years beyond increment of 100
    var spare = year % 100
    if (spare > 0) {
        included = false 
    }
    // the actual century
    var century = year / 100
    // if the year is not a perfect increment of 100, to get the correct century, do not count past the year. 
    if (included == true) {
        century -= 1
    }
    return century - (spare / 100) + 1
}
