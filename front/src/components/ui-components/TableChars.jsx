import { useState } from "react";
import { Table } from "react-bootstrap";
import cl from '../../styles/UI.module.css';

export const TableChars = ({header, body}) => {
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
                <tr>
                    <td>Размах крыльев</td>
                    <td>{body.wing}</td>
                </tr>
                <tr>
                    <td>Масса</td>
                    <td>{body.weight}</td>
                </tr>
                <tr>
                    <td>Макс. скорость</td>
                    <td>{body.vel}</td>
                </tr>
                <tr>
                    <td>Радиус действия</td>
                    <td>{body.radius}</td>
                </tr>
                <tr>
                    <td>Тип двигателя</td>
                    <td>{body.engine}</td>
                </tr>
                <tr>
                    <td>Длина</td>
                    <td>{body.length}</td>
                </tr>
                <tr>
                    <td>Время полета</td>
                    <td>{body.duration}</td>
                </tr>
            </tbody>
        </Table>
    )
}