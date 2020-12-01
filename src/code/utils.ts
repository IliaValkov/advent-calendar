/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * 
 * found on: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
export function shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export const calcColor = (id: number) => {
    // red, blue, green, yellow
    let pallete = ["#EF5350","#42A5F5","#66BB6A","#D4E157","#AB47BC", "#FFA726"];
    return pallete[id % pallete.length];
};

/**
 * Source: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 * 
 */

export function shadeColor(color: string, percent: number) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(""+(R * (100 + percent) / 100));
    G = parseInt(""+(G * (100 + percent) / 100));
    B = parseInt(""+(B * (100 + percent) / 100));

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}