export default function two_crystal_balls(breaks: boolean[]): number {
    let h = breaks.length - 1;
    let l = 0;

    do {
        let m = Math.floor((h - l) / 2) + l;
        let v = breaks[m];
        if (v === true) h = m;
        else l = m + 1;
    } while (l < h);

    if (l === breaks.length - 1) return -1;

    return l;
}
