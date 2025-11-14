CATEGORY = {
    placeholder: {
        name: "placeholder",
        color: "#eba82cff"
    },
    citacao: {
        name: "Citação",
        color: "#1de73eff"
    },
    referencia: {
        name: "Referência",
        color: "#075cddff"
    }
}

data = []

class Tool {
    constructor(name, description, link, category){
        this.name = name
        this.description = description
        this.link = link
        this.category = category

        data.push(this)
    }
}

new Tool("Placeholder name","Placeholder description is better if it have more than ten words, to simulate a real description.", "https://twitch.tv/guiven", CATEGORY.placeholder)
new Tool("Como citar", "Material sobre citação da NBR 10520/2023.", "https://www.normasabnt.org/nbr-10520/", CATEGORY.citacao)
new Tool("Referência do YouTube", "Guia para fazer referências ABNT de vídeos do YouTube.", "https://www.normasabnt.org/referencia-de-video-do-youtube/", CATEGORY.referencia)