import Botao from "../componentes/Botao";
import Formulario from "../componentes/Formulario";
import Tabela from "../componentes/Tabela";
import useClientes from "../hooks/useClientes";


export default function Index() {

    const {
        clientes,
        cliente,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        salvarCliente,
        tabelaVisivel,
        exibirTabela
    } = useClientes();

    return (
        <>
            {tabelaVisivel ? (
                <>
                    <div className="flex justify-end">
                        <Botao cor="green" className="mb-4" onClick={novoCliente}>
                            Novo Cliente
                        </Botao>
                    </div>
                    <Tabela
                        clientes={clientes}
                        clienteSelecionado={selecionarCliente}
                        clienteExcluido={excluirCliente}
                        clienteDetalhes={clientes}
                    />
                </>
            ) : (
                <Formulario
                    cliente={cliente}
                    cancelado={exibirTabela}
                    clienteMudou={salvarCliente}
                />
            )}
        </>
    )
}
