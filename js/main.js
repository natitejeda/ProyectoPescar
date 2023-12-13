const btnFeliz = document.getElementById('btn-cara_feliz')
const btnTriste = document.getElementById('btn-cara-triste')
const btnPreocupado = document.getElementById('btn-cara-preocupada')
const modalEmocionesContainer = document.getElementById('modal-emociones-container')
const modalEmociones = document.querySelector('.modal')
const modalEmocionesTexto = document.getElementById('modal-emociones-texto')
const infoGuiaModal = document.getElementById('info-guia-modal')

const cerrarModalEmociones = document.getElementById('cerrar-modal-emociones')

// traigo las frases desde el json
async function getFrases() {
  const frasesURL = '../json/frases.json'


  const res = await fetch(frasesURL)
  const data = await res.json()
  return data
}

// elijo una frase random, segun la emoción
const escojerEmocion = async (emocion) => {

  const data = await getFrases()
  let indicesEmocion = []
  
  for( let i = 0; i < data.length; i++) {
    if(data[i].emocion === emocion) {
      indicesEmocion.push(data[i])
    }
  }

  let auxIndice = Math.floor(Math.random() * indicesEmocion.length)



  const textoModal = document.createElement('p')
  const  auxtextoModal = document.createTextNode(indicesEmocion[auxIndice].texto)
  textoModal.setAttribute('id', 'frase-motivacional')
  textoModal.appendChild(auxtextoModal)

  modalEmocionesTexto.insertBefore(textoModal,infoGuiaModal)
}


//botones de emociones y cerrar modal

btnFeliz.addEventListener('click', (e) => {
  e.preventDefault()
  modalEmocionesContainer.style.opacity = "1"
  modalEmocionesContainer.style.visibility = "visible"
  modalEmociones.classList.toggle("modal-close")
  escojerEmocion('feliz')
  confetti()
})

btnTriste.addEventListener('click', (e) => {
  e.preventDefault()
  modalEmocionesContainer.style.opacity = "1"
  modalEmocionesContainer.style.visibility = "visible"
  modalEmociones.classList.toggle("modal-close")
  escojerEmocion('triste')
})

btnPreocupado.addEventListener('click', (e) => {
  e.preventDefault()
  modalEmocionesContainer.style.opacity = "1"
  modalEmocionesContainer.style.visibility = "visible"
  modalEmociones.classList.toggle("modal-close")
  escojerEmocion('preocupada')
})


cerrarModalEmociones.addEventListener('click', ()=> {
  let frase = document.getElementById('frase-motivacional')
  modalEmociones.classList.toggle("modal-close")

  setTimeout(()=> {
    modalEmocionesContainer.style.opacity = "0"
    modalEmocionesContainer.style.visibility = "hidden"
  modalEmocionesTexto.removeChild(frase)
  }, 700)
  
  
})