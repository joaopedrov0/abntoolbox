const containerRow = document.querySelector('.container .row')


document.addEventListener('DOMContentLoaded', (e) => {
    console.log(`Loaded data: ${data}`)

    data.forEach(el => {
        containerRow.innerHTML += createCard(el)
    });
})

function createCard(obj){
    return `
    <div class="col-sm-4 mb-3 mb-sm-0">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="card-text">${obj.description}</p>
            <a href="${obj.link}" class="btn btn-primary" target="_blank">Acessar</a>
        </div>
        </div>
    </div>
    `
}