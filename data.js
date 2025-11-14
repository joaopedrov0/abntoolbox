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
    },
    resumo: {},
    introducao: {},
    metodologia: {},
    conclusao: {},
    oficial: {
        name: "Material Oficial da ABNT",
        color: "#034CAE"
    },
    multi: {
        name: "Guias gerais",
        color: "#6d6d6dff"
    }
}

data = []

class Tool {
    constructor(name, description, link, categories){
        this.name = name
        this.description = description
        this.link = link
        this.categories = categories

        data.push(this)
    }
}

const {referencia, citacao, introducao, resumo, metodologia, conclusao, oficial, multi} = CATEGORY

// ! REFERÊNCIAS AQUI ! //
// ? Ordem dos parâmetros: Nome, descrição, link, categoria

// * Placeholder
new Tool("Placeholder name","Placeholder description is better if it have more than ten words, to simulate a real description.", "https://twitch.tv/guiven", [CATEGORY.placeholder])


// * Citações
new Tool("Como citar", "Material sobre citação da NBR 10520/2023.", "https://www.normasabnt.org/nbr-10520/", [CATEGORY.citacao])


// * Referências
new Tool("Referência do YouTube", "Guia para fazer referências ABNT de vídeos do YouTube.", "https://www.normasabnt.org/referencia-de-video-do-youtube/", [CATEGORY.referencia])
new Tool("Referências de livros e sites", "Guia para fazer referências ABNT de livros e sites.", "https://www.normasabnt.org/referencias-bibliograficas-abnt/", [CATEGORY.referencia])
new Tool("Gerador de referências", "Site com um gerador de referências intuitivo", "https://www.todamateria.com.br/referencias-abnt/", [CATEGORY.referencia])


// * Material oficial abnt
new Tool("Informação e documentação — Citações em documentos — Apresentação", "Guia oficial da ABNT para citações em documentos", "https://coc.fiocruz.br/wp-content/uploads/2024/03/Abnt_nbr_10520_2023.pdf", [CATEGORY.oficial])


// * Materiais gerais
new Tool("Guia Referências e Citações", "Material da PUC Minas para auxiliar referências e citações ABNT.", "https://www.pucminas.br/biblioteca/DocumentoBiblioteca/ABNT-Formatar-indicar-citacoes-e-referencia-las.pdf", [CATEGORY.multi])
new Tool("BibGuru", "Gerador de referências bibliográficas", "https://www.bibguru.com/br/c/gerador-referencias-bibliograficas-abnt/", [referencia])
