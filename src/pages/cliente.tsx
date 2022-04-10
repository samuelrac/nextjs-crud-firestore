import { useRouter } from "next/router";
import useCliente from "../hooks/useCliente";

export default function DetalhesCliente() {
    const router = useRouter();
    let id = router.query.id;

    const {
        obterPorId,
        cliente,
    } = useCliente();

    // Recupera o Cliente por ID
    const obterCliente = async () => {
        return await obterPorId(id);
    };

    while (cliente == undefined) {
        obterCliente();
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Detalhes do Cliente</h1>
            <div>
                <p>ID: {cliente.id}</p>
                <p>Nome: {cliente.nome}</p>
                <p>Idade: {cliente.idade}</p>
            </div>
        </div>
    );
}