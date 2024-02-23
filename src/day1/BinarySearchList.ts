export default function bs_list(haystack: number[], needle: number): boolean {
    if (haystack.length == 0) return false;
    let middleIndex = Math.floor((haystack.length - 1) / 2);
    let middle = haystack[middleIndex];
    if (middle === needle) return true;
    if (needle < middle) return bs_list(haystack.slice(0, middleIndex), needle);
    else
        return bs_list(
            haystack.slice(middleIndex + 1, haystack.length),
            needle,
        );
}
