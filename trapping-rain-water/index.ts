// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const input: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

function numTrapRain(input: number[]) {
    const max: number = Math.max(...input)
    let sum: number = 0
    for (let i: number = 0; i < max; i++) {
        // look at each layer with 1 unit depth trap
        const layer: number[] = input.map((el: number) => {
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

const result: number = numTrapRain(input)

console.log("result is:", result)
