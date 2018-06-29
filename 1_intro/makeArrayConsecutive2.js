function makeArrayConsecutive2(statues) {
    statues.sort(function(a, b){return a-b})
    
    var checkSpace = 0
    var neededStatues = 0
    
    for (i = 0; i < statues.length; i++) {
        var firstStatue = statues[i],
            nextStatue = statues[i + 1]
        checkSpace =  (nextStatue - firstStatue) - 1
        if (checkSpace > 0) {
            neededStatues = neededStatues + checkSpace
        }
    }
    console.log(statues)
    return neededStatues
}
