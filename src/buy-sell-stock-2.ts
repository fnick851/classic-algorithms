function maxProfit(prices: number[]): number {
  const numOfDays = prices.length
  if (numOfDays <= 1) return 0
  let profits = 0
  for (let i = 0; i < numOfDays; ++i) {
    if (prices[i + 1] > prices[i]) {
      profits += prices[i + 1] - prices[i]
    }
  }
  return profits
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))
