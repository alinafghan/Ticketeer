import { Button } from '@mui/material';
//import { Button, Container } from '@mui/material';

import React from 'react';
import styles from "./styleSheet.module.css";

const Tabs = (props) =>{
    return (
        <>
            <div className = {styles.classdiv}>
                <Button className = {props.tabsActive === 0 ? styles.classActiveB1 : styles.classB1} onClick={()=>{props.handleButton(0)}}>{props.b1}</Button>
                <Button className = {props.tabsActive === 1 ? styles.classActiveB2 : styles.classB2} onClick={()=>{props.handleButton(1)}}>{props.b2}</Button>
                <Button className = {props.tabsActive === 2 ? styles.classActiveB3 : styles.classB3} onClick={()=>{props.handleButton(2)}}>{props.b3}</Button>
            </div>
        </>
    )
}

export default Tabs;