export function kata1 (number) {
    return parseInt(Array.from(number.toString()).sort(function(a, b){return b-a}).join(""));
}