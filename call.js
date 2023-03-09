let btnNumber = document.querySelectorAll('.btn')
let btnNumberBon = Array.from(btnNumber)
let ecran = document.getElementById('ecran')

let val1;
let val2


btnNumberBon.forEach(element => {
    element.addEventListener('click', () => {
        ecran.textContent += element.textContent
        if(element.textContent === '*' || element.textContent === '/' || element.textContent === '-' || element.textContent === '+') {
            let t = ecran.textContent
            opera = t.substr(-1, 1)
            val1 = parseInt(ecran.textContent)
            ecran.textContent = ''
        }
        if(element.textContent === '=') {
            val2 = parseInt(ecran.textContent)
            console.log('2e valeur = ' + val2)
            switch(opera) {
                case '*' :
                    egal =val1 * val2
                    ecran.textContent = egal
                    return;
                    case '/' :
                        egal =val1 / val2
                        ecran.textContent = egal
                        return;
                    case '-' :
                        egal =val1 - val2
                        ecran.textContent = egal
                        return;
                    case '+' :
                        egal =val1 + val2
                        ecran.textContent = egal
                        return;
                    default : 
                        return;
                }
                ecran.textContent = ""
                val1 = ''
                val2 = ''
            }
            if(element.textContent === 'C') {
                ecran.textContent = ""
                val1 = ''
                yval2 = ''
            }
        })
    });