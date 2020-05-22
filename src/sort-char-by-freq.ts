// /// regular sort 1
// function frequencySort(string: string) {
//   const charCounts: { [key: string]: number } = {}
//   // convert to array and collect counts for char
//   string.split("").forEach(c => {
//     charCounts[c] ? ++charCounts[c] : (charCounts[c] = 1)
//   })
//   // convert the counts obj to array and sort by count
//   const list = Object.entries(charCounts)
//   list.sort((first, second) => {
//     return second[1] - first[1]
//   })
//   // construct new string
//   const newString: string[] = []
//   list.forEach(item => {
//     for (let i = 0; i < item[1]; ++i) {
//       newString.push(item[0])
//     }
//   })
//   return newString.join("")
// }

// /// regular sort 2
// function frequencySort(string: string) {
//   const charCounts: { [key: string]: number } = {}
//   for (let i = 0; i < string.length; i++) {
//     const char = string.charAt(i)
//     charCounts[char] = charCounts[char] + 1 || 1
//   }
//   // sort and conver to string
//   return Object.entries(charCounts)
//     .sort((first, second) => second[1] - first[1])
//     .map(item => item[0].repeat(item[1]))
//     .join("")
// }

/// regular sort 3
function frequencySort(s: string) {
  const hmap: { [key: string]: number } = {}
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    hmap[char] = hmap[char] + 1 || 1
  }
  const sorted = Object.keys(hmap).sort((a, b) => hmap[b] - hmap[a])
  let result = ""
  for (let i = 0; i < sorted.length; i++) {
    const char = sorted[i]
    result += char.repeat(hmap[char])
  }
  return result
}

// /// bucket sort
// function frequencySort(string: string) {
//   const charCounts: { [key: string]: number } = {}
//   // convert to array and collect counts for char
//   string
//     .split("")
//     .forEach(c => (charCounts[c] ? ++charCounts[c] : (charCounts[c] = 1)))
//   // put chars in bucket
//   const bucket: string[][] = []
//   for (let key in charCounts) {
//     const slot = charCounts[key] - 1
//     if (bucket[slot]) {
//       bucket[slot].push(key)
//     } else {
//       bucket[slot] = []
//       bucket[slot].push(key)
//     }
//   }
//   // construct new string
//   const newString: string[] = []
//   for (let i = bucket.length; i > 0; --i) {
//     if (bucket[i - 1]) {
//       bucket[i - 1].forEach(c => {
//         for (let k = 0; k < i; ++k) {
//           newString.push(c)
//         }
//       })
//     }
//   }
//   return newString.join("")
// }

// check result
console.log(frequencySort("cccaaa"))
