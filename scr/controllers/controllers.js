const Model = require('../models/model');

exports.listar = (req, res) => {
    try {
        const alunos = Model.listar();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ erro: erro.menssage});
    }
};
 exports.buscarPorId = (req, res) => {
    try{
        const id = Number(req.params.id);
        const aluno = Model.buscarPorId(id);
        if(!aluno){
            return res.status(400).json({
                erro: 'Aluno não encontrado'
            });
        }
        res.json(aluno);
    } catch (erro) {
        res.status(500).json({
            erro:erro.menssage
        });
    }
 };
 exports.cadastrar = (req, res) => {
    try {
        const {nome, idade, curso} = req.body;
        if(!nome || !idade || !curso){
            return res.status(400).json({
                erro: 'Dados Inválidos'
            });
        }
        const novoAluno = Model.cadastrar(nome, idade, curso);
        res.status(201).json(novoAluno);

    } catch (erro) {
        res.status(500).json({
            erro: erro.menssage
        });
    }
 };
exports.excluir = (req, res) => {
    try {
        const id = Number(req.params.id);
        const aluno = Model.excluir(id);

        if (!aluno) {
            return res.status(404).json({
                erro: 'Aluno não encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Aluno excluído com sucesso',
            aluno: aluno
        });

    } catch (erro) {
        return res.status(500).json({
            erro: erro.message
        });
    }
};