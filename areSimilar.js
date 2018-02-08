function areSimilar(a, b) {
    // are they the same to begin with?
    if (a.toString() === b.toString()) return true;
    
    // blank check arrays
    var c = [];
    var d = [];
    
    // place swappable pairs into check arrays
    for (var i = 0; i < a.length; i++) {
        
        if (a[i] !== b[i]) {
            c.push(a[i]);
            
            // break early if too many swaps
            if (c.length > 2) return false;
            
            d.push(b[i]);
        }
    }
    
    // reverse one array 
    d = d.reverse();
    // now compare to see if the swap is the same
    if (c.toString() === d.toString()) {
        return true;
    }
    return false;
}
