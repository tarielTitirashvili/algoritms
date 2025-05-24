function moves(x, y) {
  const deltas = [
    [2, 1], [1, 2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2],
    [1, -2], [2, -1]
  ]

  return deltas.map(([dx, dy]) => `${x + dx},${y + dy}`)
}

function findDistance(targetX, targetY) {
  let layerNumber = 0
  const [prevLayerSet, currentLayerSet] = [new Set([]), new Set(['0,0'])]
  while (!currentLayerSet.has(`${targetX},${targetY}`)) {
    const nextLayerSet = new Set()
    currentLayerSet.forEach(value => {
      const [x, y] = value.split(',')
      moves(+x, +y).map(candidate=> !prevLayerSet.has(candidate) && nextLayerSet.add(candidate))
    })
    currentLayerSet.forEach(opt => prevLayerSet.add(opt))
    currentLayerSet.clear()
    nextLayerSet.forEach(opt => currentLayerSet.add(opt))
    nextLayerSet.clear()
    layerNumber++
  }
  return layerNumber
}

console.log(findDistance(-15, -15))