import { AddCountry, UpdateCountry } from "../../dataController/apiFetching/apis.jsx";
import { Box, Button, Container } from "@mui/material";

import CustomButton from "../customButton";
import CustomForm from "../form/form.jsx";
import style from "./styleSheet.module.css";
import { useState } from "react";

const PopUpForm = (props) =>{

    async function SubmitData(){

        if(props.code === 1){
        if(props.tabActive === 0){
            const res = UpdateCountry(props.FieldID,props.Field1);
            if(res){
                props.handleClickOpen();
                alert("Country Updated")
                props.setter((prev) => !prev)
            }
            else{
                alert("Country Not Updated")
            }
        } /*
        else if(props.tabActive === 1){
            const res = UpdatePerson(props.FieldID,props.Field2,props.Field3,props.Field4,props.Field5);
            if(res){
                props.handleClickOpen();
                alert("Person Updated")
                props.setter((prev) => !prev)
            }
            else{
                alert("Person Not Updated")
            }
        }
        else if(props.tabActive === 2){

            // console.log( props.Field1 , " ",props.Field6 , "-------......>>>>")
            // console.log(props.Deserts.find((value) => value.Desert === props.Field1).id , " ",props.Users.find((value) => value.Name === props.Field6).id , "-------......>>>>")

            // console.log(props.FieldID,"ssssss");
            const desert_id = props.Deserts.find((value) => value.Desert === props.Field1).id
            const user_id = props.Users.find((value) => value.Name === props.Field6).id

            // person_id,desert_id,order_date,quantity,order_id

            const res = UpdateOrder(user_id,desert_id,props.Field3,props.Field4,props.FieldID);

            if(res){
                props.handleClickOpen();
                alert("Order Updated")
                props.setter((prev) => !prev)
            }
            else{
                alert("Order Not Updated")
            }

            

        } */
        }
        else if(props.code === 0){
            if(props.tabActive === 0){
                const res = AddCountry(props.Field1,props.Field2,props.Field3,props.Field4,props.Field5);
            if(res){
                props.handleClickOpen();
                alert("New Country Added")
                props.setter((prev) => !prev)
            }
            else{
                alert("Country Not Added")
            }
            }
            /*
            else if(props.tabActive === 1){
                const res = AddPerson(props.Field2,props.Field3,props.Field4,props.Field5);
            if(res){
                props.handleClickOpen();
                alert("New Person Added")
                props.setter((prev) => !prev)
            }
            else{
                alert("Person Not Added")
            }
            }
            else if(props.tabActive === 2){
                const desert_id = props.Deserts.find((value) => value.Desert === props.Field1).id
                const user_id = props.Users.find((value) => value.Name === props.Field6).id
                const res = AddOrder(user_id,desert_id,props.Field3,props.Field4);

                if(res){
                    props.handleClickOpen();
                    alert("New Order Added")
                    props.setter((prev) => !prev)
                }
                else{
                    alert("Order Not Added")
                }
            }*/
        }

        
    }

    return(
        <>
        <Container className = {style.containerClass}>
            <Box className = {style.boxClass}>
                    <>
                        <CustomForm code = {props.code} Countries = {props.countries} Title = {props.Title} TableFields = {props.TableFields} tabActive = {props.tabActive} Field1 = {props.Field1} handleField1 ={props.handleField1} Field2 = {props.Field2} handleField2 ={props.handleField2} Field3 = {props.Field3} handleField3 ={props.handleField3} Field4 = {props.Field4} handleField4 ={props.handleField4} Field5 = {props.Field5} handleField5 ={props.handleField5} Field6 = {props.Field6} handleField6 ={props.handleField6}/>
                    </> 
                <div className = {style.divClass}>
                    <CustomButton ButtonName = {"Cancel"} onhandleClick = {props.handleClickOpen}/>
                    <CustomButton ButtonName = {"Submit"} onhandleClick = {async () => {SubmitData()}}/>
                </div>
            </Box>
        </Container>
        </>
    );
}

export default PopUpForm;