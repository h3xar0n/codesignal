function centuryFromYear(year) {
    // divide by 100 and round down to avoid remainder, e.g. 1999 and 1901 both give 19
    // and then add 1 for the century, e.g. 1901 and 1999 were both in the 20th century
    return Math.floor((year - 1)/ 100) + 1
}
