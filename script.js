

function generateHexacolor() {
    const container = document.querySelector('.container');
    const hexacode = ['1', '2', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
        
        for (let index = 0; index < 12; index++){
        
            let count = '';
            for (let j = 0; j < 6; j++){
    
                let randomColor = Math.floor(Math.random() * hexacode.length);
         
                count += hexacode[randomColor];
            }
               
            const colorsContainer = document.createElement('div');
            colorsContainer.className = 'colors-container';
            colorsContainer.innerHTML =  `<div class="color">
        
            </div>
            <div class="hexacode">
                <h1 class="code">#${count}</h1>
            </div>`
             const hexacolors = colorsContainer.querySelector('.color');
            hexacolors.style.background = `#${count}`
            container.appendChild(colorsContainer)
    
        }
 
}
const container = document.querySelector('.container');
   const randomBtn = document.querySelector('.generate');

randomBtn.addEventListener('click', () => {
      container.innerHTML = ''
    generateHexacolor()
   
 })

 generateHexacolor()



