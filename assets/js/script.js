window.addEventListener('DOMContentLoaded', () => {

    function generatePass(chcks) {

        let pass = ''
        let elems = []

        const passLength = document.querySelector('#length').value

        const lower = 'abcdefghijklmnopqrstuvwxyz'
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const number = '0123456789'
        const symbol = '?!@#$%&*(){};'

        chcks.forEach(chck => {
            elems.push(chck.dataset.code)
        })

        for (let i = 0; i < passLength; i++) {

            let charType = Number(elems[Math.floor(Math.random() * elems.length)])
            let randomNum

            switch (charType) {
                case 0:
                    randomNum = Math.floor(Math.random() * lower.length)
                    pass += lower.substring(randomNum, randomNum + 1)
                    break;

                case 1:
                    randomNum = Math.floor(Math.random() * upper.length)
                    pass += upper.substring(randomNum, randomNum + 1)
                    break;

                case 2:
                    randomNum = Math.floor(Math.random() * number.length)
                    pass += number.substring(randomNum, randomNum + 1)
                    break;

                case 3:
                    randomNum = Math.floor(Math.random() * symbol.length)
                    pass += symbol.substring(randomNum, randomNum + 1)
                    break;
            }

        }

        document.querySelector('span').innerText = pass

    }

    document.querySelector('form').onsubmit = () => {

        const chcks = document.querySelectorAll('input[type="checkbox"]:checked')

        if (chcks.length === 0) { window.alert('Selecione os caractéres que deseja utilizar.'); return false }

        generatePass(chcks)

        return false

    }

})