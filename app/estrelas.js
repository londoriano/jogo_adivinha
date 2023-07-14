const estrelas = document.getElementById('estrelas')
fazEstrelas(contador);

function fazEstrelas(x) {

    estrelas.innerHTML = "";

    for (let i = 0; i < x; i++) {
        const estrela = document.createElement("i");
        estrela.classList.add("fa-solid", "fa-star", "fa-sm");
        estrelas.appendChild(estrela);
    }

    let diferenca = (9 - x);

    for (let i = diferenca; i > 0; i--) {
        const estrelaVazia = document.createElement("i");
        estrelaVazia.classList.add("fa-regular", "fa-star", "fa-sm");
        estrelas.appendChild(estrelaVazia);
    }
}
