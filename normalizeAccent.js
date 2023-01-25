var accentRef = [
    { "reg" : "[À-ÅĀ-ąà-åǞ-ǡǺǻȀ-ȃ]" , "char" : "A" },
    { "reg" : "[È-Ëè-ëĒ-ěȄ-ȇ]" , "char" : "E"},
    { "reg" : "[Ì-Ïì-ïĨ-İǏǐȈ-ȋ]" , "char" : "I"},
    { "reg" : "[Ò-ÖØò-öøŌ-őǑǒȌ-ȏ]" , "char" : "O"},
    { "reg" : "[Ù-Üù-üŨ-ųǓ-ǜȔ-ȗ]" , "char" : "U"},
    { "reg" : "[ÇçĆ-čƇƈ]" , "char" : "C"},
    { "reg" : "[ÑñŃ-ŋ]" , "char" : "N"},
    { "reg" : "[ÆæǢǣ]" , "char" : "AE"},
    { "reg" : "[Œœ]" , "char" : "OE"}
];
function normalizeAccent( str ){
    accentRef.forEach(
        function( el ){
            str = str.replace(new RegExp(el.reg,"g"), function(m){
                if(m == m.toLowerCase())
                    return el.char.toLowerCase();
                else
                    return el.char.toUpperCase();
            });
        }.bind( this)
    )

    return str;
}

String.prototype.normalizeAccent = function(){
    return normalizeAccent( this );
}
