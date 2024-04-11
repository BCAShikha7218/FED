function createButtons() {
    const buttonsContainer = document.getElementById('buttons');
    const buttonValues =[
            'C','/','*','CE',
            '7','8','9','-',
            '4','5','6','+',
            '1','2','3','=',
            '00','0','.','%'
        ];

    buttonValues.forEach(value => {
      const button = document.createElement('button');
      button.textContent = value;
      button.onclick = function() {
        if(value === '=') {
          calculate();
        } else if(value === 'C') {
          clearDisplay();
        } else if (value === 'CE') {
            clearLast(); 
        } else {
          appendToDisplay(value);
        }
      };
      buttonsContainer.appendChild(button);
    });
  }

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function clearLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

  function calculate() {
    try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter'].includes(key)) {
    event.preventDefault();
    if (key === 'Enter') {
      calculate();
    } else {
      appendToDisplay(key);
    }
  } else if (key === 'Backspace') {
    clearLast();
   }
   else if (key === 'Escape') { 
    clearDisplay();
   }
});
  window.onload = createButtons;