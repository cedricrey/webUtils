
//Permet de convertir une majorité de caractère accentués dans le caratère non accentué correspondant en conservant la casse
//"éÈÈàûéç".normalizeAccent() --> 'eEEauec'
/*
var accentReferenciel = [
    { "reg" : "[À-ÅA-aà-åA-¿¿¿¿-¿]" , "char" : "A" },
    { "reg" : "[È-Ëè-ëE-e¿-¿]" , "char" : "E"},
    { "reg" : "[Ì-Ïì-ïI-IIi¿-¿]" , "char" : "I"},
    { "reg" : "[Ò-ÖØò-öøO-oOo¿-¿]" , "char" : "O"},
    { "reg" : "[Ù-Üù-üU-uU-u¿-¿]" , "char" : "U"},
    { "reg" : "[ÇçC-c¿¿]" , "char" : "C"},
    { "reg" : "[ÑñN-¿]" , "char" : "N"},
    { "reg" : "[Ææ¿¿]" , "char" : "AE"},
    { "reg" : "[Œœ]" , "char" : "OE"}
];
*/
var accentReferenciel = [
  {
    reg: '[\\u00c0-\\u00c5\\u0100-\\u0105\\u00e0-\\u00e5\\u01de-\\u01e1\\u01fa\\u01fb\\u0200-\\u0203]',
    char: 'A'
  },
  {
    reg: '[\\u00c8-\\u00cb\\u00e8-\\u00eb\\u0112-\\u011b\\u0204-\\u0207]',
    char: 'E'
  },
  {
    reg: '[\\u00cc-\\u00cf\\u00ec-\\u00ef\\u0128-\\u0130\\u01cf\\u01d0\\u0208-\\u020b]',
    char: 'I'
  },
  {
    reg: '[\\u00d2-\\u00d6\\u00d8\\u00f2-\\u00f6\\u00f8\\u014c-\\u0151\\u01d1\\u01d2\\u020c-\\u020f]',
    char: 'O'
  },
  {
    reg: '[\\u00d9-\\u00dc\\u00f9-\\u00fc\\u0168-\\u0173\\u01d3-\\u01dc\\u0214-\\u0217]',
    char: 'U'
  },
  { reg: '[\\u00c7\\u00e7\\u0106-\\u010d\\u0187\\u0188]', char: 'C' },
  { reg: '[\\u00d1\\u00f1\\u0143-\\u014b]', char: 'N' },
  { reg: '[\\u00c6\\u00e6\\u01e2\\u01e3]', char: 'AE' },
  { reg: '[\\u0152\\u0153]', char: 'OE' }
];
function normalizeAccent( str ){
    accentReferenciel.forEach(
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
