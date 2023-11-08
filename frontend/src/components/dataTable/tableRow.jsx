import { deleteCountries } from 'src/dataController/apifetching/apis.jsx';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PopUpForm from '../../components/popUp';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import style from "./styleSheet.module.css";

const TableElementRow = (props) => {

    function handleEditRow(){
        // console.log(props.row,"props.row")
        // console.log(props.keysArray,"props.keysArray")
        props.handleFieldID(props.row[props.keysArray[0]])

        if(props.tabActive === 0){
            props.handleField1(props.row[props.keysArray[1]]);
            props.handleField2(props.row[props.keysArray[2]]);
            props.handleField3(props.row[props.keysArray[3]]);
            props.handleField4(props.row[props.keysArray[4]]);
            props.handleField5( props.row[props.keysArray[5]]);
        }
        else if(props.tabActive === 1){
            props.handleField2(props.row[props.keysArray[1]]);
            props.handleField3(props.row[props.keysArray[2]]);
            props.handleField4(props.row[props.keysArray[3]]);
            props.handleField5( props.row[props.keysArray[4]]);
        }
        else if(props.tabActive === 2){
            props.handleField1(props.row[props.keysArray[2]]);
            props.handleField2(props.row[props.keysArray[7]]);
            props.handleField3(props.row[props.keysArray[4]]);
            props.handleField4(props.row[props.keysArray[5]]);
            props.handleField5( props.row[props.keysArray[6]]);
            props.handleField6( props.row[props.keysArray[3]]);
        }

        props.handleEdit();
    }

    async function DeleteRecord(){
        
        console.log(props.row[props.keysArray[0]],"delete record of id")

        if(props.tabActive === 0){
          const res = await deleteCountries(props.row[props.keysArray[0]])
          if(res){
            alert("Country Deleted")
            props.setter((prev) => !prev)
          }else{
            alert("Country Not Deleted")
          }
          
          console.log("delete country")
        }
        /*else if(props.tabActive === 1){
          
          const res = await deleteUser(props.row[props.keysArray[0]])
          if(res){
            alert("User Deleted")
            props.setter((prev) => !prev)
          }else{
            alert("User Not Deleted")
          }

          console.log("delete user")
        }
        else if(props.tabActive === 2){

          const res = await deleteOrder(props.row[props.keysArray[0]])
          if(res){
            alert("order Deleted")
            props.setter((prev) => !prev)
          }else{
            alert("order Not Deleted")
          }
          console.log("delete order")
        } */
    }

    return(
        <>
        <TableRow
        key={props.row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <div className={ props.index === (props.Data.length - 1) ?style.divClass2: style.divClass} >

          <EditIcon style = {{fontSize : "17.5px"}} onClick = {()=>handleEditRow()} />
        
        </div>

        {
          props.keysArray.map((key) => {
            if(key !== "id"){
            return(
              <TableCell align="left">{props.row[key]}</TableCell>
            )
            }
            else{
              return(
                <></>
              )
            }
          })
        }
        
        <TableCell align="left">
          <DeleteIcon style = {{fontSize : "17.5px"}} onClick = {async ()=>{await DeleteRecord()}} />
        </TableCell>
      </TableRow>
      </>
    )
}

export default TableElementRow;