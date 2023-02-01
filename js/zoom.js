const zoomIn = document.getElementById('zoomIn')
const zoomOut = document.getElementById('zoomOut')
const miDiv = document.getElementById('miDiv')
let zoom = 1
let scale = 1

let originX;
let originY;

zoomIn.addEventListener('click', () => {
  zoom += 0.1
  miDiv.style.transform = `scale(${zoom})`
})

zoomOut.addEventListener('click', () => {
  zoom -= 0.1
  miDiv.style.transform = `scale(${zoom})`
})

miDiv.addEventListener('wheel', (event) => {
  let mouseX = event.clientX - (miDiv.offsetLeft *0.5)
  let mouseY = event.clientY - (miDiv.offsetTop *0.5)

  if (event.deltaY > 0) {
    scale -= 0.1
  } else {
    scale += 0.1
  }

//   originX = (mouseX / miDiv.offsetWidth) * (1 - scale)
  originX = (mouseX / (miDiv.offsetWidth * 0.5)) * (1 - scale)
  originY = (mouseY / (miDiv.offsetHeight/2)) * (1 - scale)

  miDiv.style.transformOrigin = `${originX * 0.5}% ${originY * 0.5}%`
  miDiv.style.transform = `scale(${scale})`
})
