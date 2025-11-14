const container = document.querySelector('.container')


document.addEventListener('DOMContentLoaded', (e) => {
    console.log(`Loaded data: ${data}`)

    for(let cat in CATEGORY){
        let temp = ""
        let category = CATEGORY[cat]
        data.forEach(el => {
            if (el.categories.includes(category)){
                temp += createCard(el)
            }
        });
        if (temp === "")
            continue

        container.innerHTML += `
        <h2 class="mt-5 mb-3">${category.name}</h2>
        <div class="row g-2">${temp}</div>`
    }

})

function createCard(obj){
    return `
    <div class="col-lg-4 col-md-6 mb-3 mb-sm-0">
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