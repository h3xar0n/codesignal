function checkPalindrome(inputString) {
    var backwardsString = inputString.split('').reverse().join('')
    if (backwardsString === inputString) {
        return true
    } else {
        return false
    }
}
