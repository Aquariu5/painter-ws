import { useState } from "react";
import cl from '../../styles/UI.module.css'
import {Card} from 'react-bootstrap';
export const Header = ({name}) => {
    console.log('nameheader', name);
    return (
        <Card className={cl.Header}>
            {name}
        </Card>
    )
}