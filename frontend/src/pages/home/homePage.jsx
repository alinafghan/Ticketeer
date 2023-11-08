import { Box, Container, TextField } from '@mui/material';
import { HomePageTitle, TableNames, Table_columns, getCountry } from '../../dataController/strings';
import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import BasicTable from '../../components/dataTable/table';
import CustomButton from '../../components/customButton';
import PopUpForm from '../../components/popUp';
import SearchField from '../../components/searchField';
import Tabs from '../../components/tabs';
import style from "./styleSheet.module.css";

const Home =()=>{

    const [openPopUp , setOpenPopUp] = React.useState(false);
    const [tabData, setTabData] = React.useState(0);

    const [Field1, setField1] = useState();
    const [Field2, setField2] = useState();
    const [Field3, setField3] = useState();
    const [Field4, setField4] = useState();
    const [Field5, setField5] = useState();
    const [Field6, setField6] = useState();
    const [FieldID , setFieldID] = useState();

    const [rowDelete, setRowDelete] = useState(false);
    const [Countries,setCountry] = useState([]);   
    //const [Users,setUsers] = useState([]);
    //const [Orders,setOrders] = useState([]);
    
    useEffect(() => {

        async function getData(){
            let data = await getCountry();
            setCountry(data);
            /*data = await getUsers();
            setUsers(data);
            data = await getOrders();
            setOrders(data);*/
        }

        getData();
        
        setField1("");
        setField2("");
        setField3("");
        setField4("");
        setField5("");
        setField6("");


    },[tabData, openPopUp, rowDelete])

    // const [DesertsData,setDesertsData] = useState([]);
    // const [PeopleData , setPeopleData] = useState([]);
    

    // useEffect(()=>{
    //     Deserts.map((desert)=>{
    //         id:
    //     })

    // },[Deserts,Users] );
    
    
    function handleField1(value){
        setField1(value);
    }
    function handleField2(value){
        setField2(value);
    }
    function handleField3(value){
        setField3(value);
    }
    function handleField4(value){
        setField4(value);
    }
    function handleField5(value){
        setField5(value);
    }
    function handleField6(value){
        setField6(value);
    }

    function handleFieldID(value){
        setFieldID(value);
    }
    
    function handleTab(index){

        setTabData(index);
    }

    function handleClickOpen(){

        setOpenPopUp((prev ) => !prev);
    }
    return(
        <>

        {openPopUp ? <PopUpForm Countries={Countries} setter = {setRowDelete} code={0} FieldID={FieldID} handleFieldID = {handleFieldID} Title = {"Add New"} handleClickOpen = {handleClickOpen} TableFields = {Table_columns[tabData]} tabActive = {tabData} Field1 = {Field1} handleField1 ={handleField1} Field2 = {Field2} handleField2 ={handleField2} Field3 = {Field3} handleField3 ={handleField3} Field4 = {Field4} handleField4 ={handleField4} Field5 = {Field5} handleField5 ={handleField5} Field6 = {Field6} handleField6 ={handleField6} /> : <></>}
        
        <div className={style.divClass}>
            <h1>{HomePageTitle}</h1>
        </div>

        <Container className={style.containerClass}>
            <div className = {style.divClass2}>
            {/* <CustomButton ButtonName = {"Add Mock Data"}/> */}
            <SearchField/>
            <AddIcon className={style.addIcon} onClick = {handleClickOpen}/>

            <div style={{width : "50%"}}/>
                <Tabs  handleButton = {handleTab} b1 = {TableNames[0]} b2 = {TableNames[1]} b3 = {TableNames[2]} tabsActive = {tabData}/>
            </div>
            <Box className = {style.boxClass}>
                <BasicTable Countries={Countries} setter = {setRowDelete} FieldID={FieldID} handleFieldID = {handleFieldID} tabActive = {tabData} TableNames = {TableNames} Table_columns={Table_columns[tabData]} Data = {tabData === 0 ? Countries : []} Field1 = {Field1} handleField1 ={handleField1} Field2 = {Field2} handleField2 ={handleField2} Field3 = {Field3} handleField3 ={handleField3} Field4 = {Field4} handleField4 ={handleField4} Field5 = {Field5} handleField5 ={handleField5} Field6 = {Field6} handleField6 ={handleField6}     />
            </Box>
        </Container>

        
        </>
        
    )
}

export default Home;