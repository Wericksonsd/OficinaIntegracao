import { Atividade } from "./typesAtv";

let atividades: Atividade[] = [
    {
        id: 1,
        setor: "material",
        titulo: "SLIDES OFICINA 4",
        tema : "Verbs to be",
        entrega : "18/10",
        descricao : "Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio porro esse vel veritatis tenetur quae, repellendus laborum est totam provident maxime saepe labore debitis."
    },
    {
        id: 2,
        setor: "material",
        titulo: "SLIDES OFICINA 5",
        tema : "Sports",
        entrega : "25/10",
        descricao : "Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio porro esse vel veritatis."
    },
    {
        id: 3,
        setor: "material",
        titulo: "SLIDES OFICINA 6",
        tema : "False Cognatos",
        entrega : "31/10",
        descricao : "Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident maxime saepe labore debitis."
    },
];

export const getAtividades = async (): Promise<Atividade[]> => {
    return atividades;
};

export const addAtividade = async (novaAtv: Atividade): Promise<boolean> => {
    atividades.push(novaAtv);
    return true;
};
