import React from 'react'
import TitlePage from './../../components/TitlePage';
import { Nav } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';

export default function ClienteForm() {
    let { id } = useParams()
    return (
        <>
            <TitlePage title={'Detalhes do Cliente ' + (id !== undefined ? id : '')} >
                <Nav.Link className={(navData) => navData.isActive ? 'active' : ''} as={NavLink} to='/cliente/lista'>
                    <i className='fas fa-arrow-left me-2' ></i>
                    Voltar
                </Nav.Link>
            </TitlePage>
            <div>

            </div>
        </>
    )
}
