const hexInput = document.getElementById('hexInput')
const inputColot = document.getElementById('inputColor')

const isValidHex = (hex) => {
    if(!hex) return false

    const strippedHex = hex.replace('#', '')
    return strippedHex.length === 3 || strippedHex.length === 6
}

