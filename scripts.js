const Modal = {
    open() {
        // Abrir moral
        // Adicionar a clase active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close() {
        //Fechar o modal
        //remover a class active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    }
    {
        id: 2,
        description: 'Website',
        amount: -500000,
        date: '23/01/2021'
    }
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes() {
        //Somar as entradas
    },
    expenses() {
        //Somar as saídas
    },
    total() {
        //Entradas - Saídas
    }
}

const DOM = {
    const html = ``
}



/* treinando

function DoubleClick() {
    var Modal = document.querySelector('.modal-overlay');
    if (Modal.style.display === "none") {
        Modal.style.display = "active";
    }else {
        Modal.style.display = "none"
    }
}*/

