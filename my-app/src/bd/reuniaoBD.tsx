const reuniao = [
    {
        id: 1,
        setor: "material",
        titulo: "Reunião Semanal",
        tema: "Semana 04",
        data: "terça-feira, 19h",
        descricao: "Planejamento da semana",
        link: "/",
        participantes:["Ana", "Anny", "Enio"]
    },

    {
        id: 2,
        setor: "material",
        titulo: "Reunião Semanal",
        tema: "Semana 05",
        data: "terça-feira, 19h",
        descricao: "Planejamento da semana",
        link: "/",
        participantes:["Ana", "Anny", "Enio"]
    },  
]

export const getReuniao = async () => {
    return reuniao;
}
