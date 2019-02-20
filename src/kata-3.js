export function kata3(n, m) {
    let factorsPowSum = [...Array(m - n + 1).keys()].map(i => {
        return [i + n, factors(i + n)
            .map(i => Math.pow(i, 2))
            .reduce((last, actual) => last + actual)]
    });
   return (factorsPowSum.filter(iterateObject => Math.sqrt(iterateObject[1]) % 1 == 0));
}
const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)
