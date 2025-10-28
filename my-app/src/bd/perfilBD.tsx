const perfils =[
    {
        id : 1,
        foto : "/gato.jpg",
        nome : "Chico",
        email : "chico@alunos.utfpr.edu.br",
        telefone : "43 99999-0000",
        setor : "Material",
        curiosidade : "Top 50 no raking de Free Fire nacional",
        curso : "ADS",
        periodo : "Terceiro",
        ingles : "Intermediário",
        cidade: "Leópolis",
        aniversario : "29/02",
        hobbie : ["Sicuna","Free Fire","Jogo do Bicho"],
    },

    {
        id : 2,
        foto : "/gato.jpg",
        nome : "Chico",
        email : "chico@alunos.utfpr.edu.br",
        telefone : "43 99999-0000",
        setor : "Material",
        curiosidade : "Top 50 no raking de Free Fire nacional",
        curso : "ADS",
        periodo : "Terceiro",
        ingles : "Intermediário",
        cidade: "Leópolis",
        aniversario : "29/02",
        hobbie : ["Sicuna","Free Fire","Jogo do Bicho"],
    }
]

export const getPerfils = async () => {
    return perfils;
}