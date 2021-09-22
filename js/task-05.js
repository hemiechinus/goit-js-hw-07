const inputValue = document.getElementById('name-input')
const outputValue = document.getElementById('name-output')

const textDefault = outputValue.textContent

inputValue.addEventListener('input', (evt) => {
  if (!(evt.target.value === '')) {
      outputValue.textContent = evt.target.value
     } else outputValue.textContent = textDefault
 })