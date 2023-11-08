import { Button } from '@mui/material';
import React from 'react';
import style from './styleSheet.module.css';

const CustomButton = (props) =>{
    return(
        <Button variant='text' className ={style.buttonClass} onClick = {props.onhandleClick}>
            {props.ButtonName}
        </Button>
    )
}

export default CustomButton;