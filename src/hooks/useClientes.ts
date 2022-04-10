import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";

import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const { 
        tabelaVisivel,
        exibirTabela,
        exibirFormulario 
    } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos()
            .then(clientes => {
                setClientes(clientes)
                exibirTabela()
            })
    }

    const obterPorId = async (id: string | string[]) => {
        return await repo.obterPorId(id)
    }

    const selecionarCliente = (cliente: Cliente) => {
        setCliente(cliente)
        exibirFormulario()
    }

    const novoCliente = () => {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    const excluirCliente = async (cliente: Cliente) => {
        await repo.excluir(cliente)
        obterTodos()
    }

    const salvarCliente = async (cliente: Cliente) => {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        salvarCliente,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        obterTodos,
        obterPorId,
        tabelaVisivel,
        exibirTabela
    }
}