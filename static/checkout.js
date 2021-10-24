const infoEls = document.querySelectorAll('.info');
const submitBtn = document.getElementById('submit');

class Input {
    constructor (parent, min=1, max=undefined) {
        this.parent = parent;

        const containerEl = document.createElement('div');
        containerEl.classList.add('input-div')
        parent.appendChild(containerEl)

        const plusBtn = document.createElement('button')
        plusBtn.addEventListener('click', this.increment)
        plusBtn.innerHTML = '<i class="fas fa-plus"></i>';
        containerEl.appendChild(plusBtn)

        this.inputEl = document.createElement('input');
        this.inputEl.value = 1
        this.inputEl.type = 'number';
        this.inputEl.min = min;
        max ? this.inputEl.max = max : '';
        containerEl.appendChild(this.inputEl)

        const minusBtn = document.createElement('button')
        minusBtn.addEventListener('click', this.decrement)
        minusBtn.innerHTML = '<i class="fas fa-minus"></i>';
        containerEl.appendChild(minusBtn)
    }

    increment = () => {
        let value = this.inputEl.value;
        let max = Number.parseInt(this.inputEl.max)
        if (value < max || Number.isNaN(max)) {
            this.inputEl.value = Number.parseInt(value) + 1;
        }
        console.log(this.inputEl.max);
    }

    decrement = () => {
        let value = this.inputEl.value
        if (value > Number.parseInt(this.inputEl.min)) {
            this.inputEl.value = Number.parseInt(value) - 1;
        }
    }


}

submitBtn.addEventListener('click', (e) => {
    const inputEls = document.querySelectorAll('form input');
    let valid = true;
    for (let inputEl of inputEls) {
        if (!inputEl.checkValidity()) {
            valid = false;
            break
        }
    }
    console.log('clicked');
    if (valid) {
        e.preventDefault();
        let button = e.target;
        button.innerHTML = '<i class="fas fa-check"></i>&nbsp;&nbsp;Submitted';
        button.style.backgroundColor = '#53c153'
        button.classList.add('move-up')
        console.log('Validated and submitted');
        button.disabled = true;
        button.style.pointerEvents = 'none';
    } else {
        console.log('invalid');
    }
})

for (el of infoEls) {
    new Input(el, 1)
}