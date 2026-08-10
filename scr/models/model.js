let alunos = [];
let idAtual = 1;

exports.listar = () => {
    return alunos;
};

exports.buscarPorId = (id) => {
    return alunos.find(aluno => aluno.id === id);
};

exports.cadastrar = (nome, idade, curso) => {
    const novoAluno = {
        id: idAtual++,
        nome,
        idade,
        curso
    };
     alunos.push(novoAluno);
     return novoAluno;
};

exports.excluir = (id) => {
    const indice = alunos.findIndex(aluno => aluno.id === id);

    if(indice === -1){
        return null;
    }
    return alunos.splice(indice, 1)[0];
}