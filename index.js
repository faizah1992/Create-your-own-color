const isValidHex = (hex) => {
    if(!hex) return false

    const strippedHex = hex.replace('#', '')
    returrn strippedHex.length === 3 || strippedHex.length === 6
}