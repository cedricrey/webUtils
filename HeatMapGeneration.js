
var percentColors = [
    { pct: 0, color: { r: 0xa1, g: 0x00, b: 0 } },
    { pct: 50, color: { r: 0xff, g: 0x53, b: 0x36 } },
    { pct: 70, color: { r: 0xf0, g: 0xb4, b: 0x50 } },
    { pct: 90, color: { r: 0x84, g: 0xe0, b: 0x95 } },
    { pct: 100, color: { r: 0x00, g: 0xb3, b: 0x68 } } ];
    
var getColorForPercentage = function(pct) {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    // or output as hex if preferred
};

function ratioCritic(type, info)  {
    seuil = 50;
    isCritic = false;
    
    for each(var date in allDate) {
        if( info[date] ){
            var ci = info[date];
            if (parseFloat(ci.ratio) <= parseFloat(seuil))  {
                isCritic = true;
            }
        }
    }
    
    if (isCritic == true) {
        return 1;
    }
    else  {
        return 0;
    }
}
