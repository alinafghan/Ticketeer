import * as React from 'react';

import Paper from '@mui/material/Paper';
import PopUpForm from '../../components/popUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableElementRow from './tableRow';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import style from "./styleSheet.module.css";

export default function BasicTable(props) {

  const keysArray = Object.keys(props.Data.length !== 0 ? props.Data[0]:0)

  const [openPopUp , setOpenPopUp] = React.useState(false);



  function handleEdit(){
    
    setOpenPopUp((prev) => !prev);
    
  }
  

  return (
    <>
    {openPopUp?   <PopUpForm Countries = {props.Countries} setter = {props.setter} code = {1} FieldID={props.FieldID} handleFieldID = {props.handleFieldID} Title = {"Update"} handleClickOpen = {handleEdit} TableFields = {props.Table_columns} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6} /> : <></>}
    <TableContainer component={Paper}  style = {{backgroundColor : "rgba(128,128,128,0.5)",  maxHeight : 400 ,overflow : "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={style.tableColumn} align="right"></TableCell>
            {
              props.Table_columns.columns.map((column) => {
                return(
                  <TableCell className={style.tableColumn} align="left">{column}</TableCell>
                )
              })

            }
            <TableCell className={style.tableColumn} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          props.Data.length !== 0 ?
          props.Data?.map((row,index) => (

            <TableElementRow setter = {props.setter} handleFieldID = {props.handleFieldID}  handleEdit ={handleEdit} row = {row} keysArray = {keysArray} index = {index} Data = {props.Data}  TableFields = {props.Table_columns} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6} />
            
          )) : <></>}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}