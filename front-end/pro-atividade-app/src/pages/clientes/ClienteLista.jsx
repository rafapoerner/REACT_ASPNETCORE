import { FormControl, InputGroup, Button } from 'react-bootstrap';
import TitlePage from '../../components/TitlePage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const clientes = [
    {
        id: 1,
        nome: 'Microsoft',
        responsavel: 'Tarcísio',
        contato: '123456789',
        situacao: 'Ativo'
    },
    {
        id: 2,
        nome: 'Amazon',
        responsavel: 'M. Pontes',
        contato: '987654321',
        situacao: 'Ativo'
    },
    {
        id: 3,
        nome: 'Meta',
        responsavel: 'Paulo Guedes',
        contato: '456123789',
        situacao: 'Em análise'
    },
    {
        id: 4,
        nome: 'Google',
        responsavel: 'Cunha',
        contato: '789123456',
        situacao: 'Ativo'
    },
    {
        id: 5,
        nome: 'Twiter',
        responsavel: 'Mike',
        contato: '321654987',
        situacao: 'Desativado'
    }
]


export default function ClienteLista() {
    const navigate = useNavigate();

    const [termoBusca, setTermoBusca] = useState('')

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value)
    }
    const clientesFiltrados = clientes.filter((cliente) => {
        return (
            Object.values(cliente)
                .join('')
                .toLocaleLowerCase()
                .includes(termoBusca.toLocaleLowerCase())
        )
    })
    const novoCliente = () => {
        navigate('/cliente/detalhe')
    }

    return (
        <>
            <TitlePage title='Cliente Lista'>
                <Button variant='outline-primary' onClick={novoCliente}>
                    <i className='fas fa-plus me-2' ></i>
                    Novo Cliente
                </Button>
            </TitlePage>
            <br />
            <InputGroup className="mt-3 mb-3">
                <InputGroup.Text >
                    Buscar:
                </InputGroup.Text>
                <FormControl
                    onChange={handleInputChange}
                    placeholder='Buscar'
                />
            </InputGroup>
            <table className="table table-hover">
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Responsável</th>
                        <th scope="col">Contato</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.responsavel}</td>
                            <td>{cliente.contato}</td>
                            <td>{cliente.situacao}</td>
                            <td>
                                <div>
                                    <button className="btn btn-sm btn-outline-primary me-2"
                                        onClick={() => navigate(
                                            `/cliente/detalhe/${cliente.id}`
                                        )}>
                                        <i className='fas fa-user-edit me-2'></i>
                                        Editar
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger me-2">
                                        <i className='fas fa-user-times me-2'></i>
                                        Desativar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
