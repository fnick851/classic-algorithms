// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

function numTrapRain(input) {
    const max = Math.max(...input)
    let sum = 0
    for (let i = 0; i < max; i++) {
        // look at each layer with 1 unit depth trap
        const layer = input.map(el => {
            if (el - i < 1) {
                return 0
            } else {
                return 1
            }
        })

        // take off leading and trailing 0s
        while (layer[layer.length - 1] === 0) {
            layer.pop()
        }
        while (layer[0] === 0) {
            layer.shift()
        }

        // count the traps in this layer
        for (let el of layer) {
            el === 0 ? (sum += 1) : null
        }
    }
    return sum
}

const result = numTrapRain(input)

console.log("result is:", result)
