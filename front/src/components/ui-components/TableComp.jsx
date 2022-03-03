import { useState } from "react";
import { Table } from "react-bootstrap";
import cl from '../../styles/UI.module.css';

export const TableComp = ({header, body, onOver, onOut, onClick, propFlag}) => {
    const [selected, setSelected] = useState('')
    const [name, setName] = useState('')
    return (
        <Table striped bordered className={cl.Table}>
            <thead>
                <tr>
                    <td>
                        {header}
                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    //style={{background: !(el == name) ? selected: ''}}
                    body.map(el => {
                        return (
                            <tr key={el} style={{background: retBackColor(name)}}>
                                {
                                    propFlag ?
                                    <td
                                        onMouseOver={() => onOver(true, el)}
                                        onMouseOut={() => onOut(false, el)}
                                        // onClick={() => onClick(el)}
                                        onClick={() => () => {setSelected('red'); setName(el)}}
                                        >
                                        {el}
                                    </td>
                                    :
                                    <td style={{fontSize: '14px'}}>
                                    {el}
                                    </td>
                                }

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}