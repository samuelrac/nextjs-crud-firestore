import { useState } from "react";

import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function useCliente() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const [cliente, setCliente] = useState<Cliente>();

    const obterPorId = async (id: string | string[]) => {
        repo.obterPorId(id)
            .then(cliente => {
                setCliente(cliente)
            }
        )
    }

    return {
        obterPorId,
        cliente
    }
}