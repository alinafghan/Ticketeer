import { Box, Grid, TextField } from "@mui/material";

import DropDown from "../dropDown";
import style from "./styleSheet.module.css";

const CustomForm = (props) => {
    
   return(
    <>
    
    <Box className = {style.boxClass}>
        <Grid container spacing={2}>
            <Grid item xs = {12}>
                <h1>{props.Title}</h1>
            </Grid>
            {props.tabActive === 0 ?
            <Grid item xs={12} sm={12}>
                <TextField value = {props.Field1} onChange={(e)=>{props.handleField1(e.target.value)}} className = {style.textFieldClass} variant="filled" label = {props.tabActive !== 2 ? props.TableFields.columns[0] :  props.TableFields.columns[1] }/>
            </Grid> : 
            props.tabActive == 2 
            ?
            <Grid item xs={12} sm={12}>
                {/* {console.log(props.Deserts.find((desert) => desert.Desert === props.Field1) !== null ? props.Deserts.find((desert) => desert.Desert === props.Field1).id : props.Field1 , "rrrrrrrrr")} */}
                <DropDown value = {props.Field1 } handleChange = {props.handleField1} code = {0} Data = {props.Deserts} label = {props.TableFields.columns[0]} />
            </Grid> 
            :<></>
            }
            <Grid item xs={6}>
                {
                    props.tabActive === 2 ?
                <TextField value = {props.Field2} disabled onChange={(e)=>{props.handleField2(e.target.value)}} className = {style.textFieldClass} variant="filled" label = { props.tabActive === 0 ? props.TableFields.columns[1] : props.tabActive === 1 ? props.TableFields.columns[0] :  props.TableFields.columns[6]}/>
                :
                <TextField value = {props.Field2} onChange={(e)=>{props.handleField2(e.target.value)}} className = {style.textFieldClass} variant="filled" label = { props.tabActive === 0 ? props.TableFields.columns[1] : props.tabActive === 1 ? props.TableFields.columns[0] :  props.TableFields.columns[6]}/>
            }
            </Grid>
            <Grid item xs={6}>
                <TextField value = {props.Field3} onChange={(e)=>{props.handleField3(e.target.value)}}className = {style.textFieldClass} variant="filled" label = {props.tabActive === 0 ? props.TableFields.columns[2] : props.tabActive === 1 ? props.TableFields.columns[1] :  props.TableFields.columns[3]}/>
            </Grid>
            <Grid item xs={6}>
                <TextField value = {props.Field4} onChange={(e)=>{props.handleField4(e.target.value)}} className = {style.textFieldClass} variant="filled" label = {props.tabActive === 0 ? props.TableFields.columns[3] : props.tabActive === 1 ? props.TableFields.columns[2] :  props.TableFields.columns[4] }/>
            </Grid>
            <Grid item xs={6}>
                {
                    props.tabActive === 2 ?
                    <TextField value = {props.Field5} onChange={(e)=>{props.handleField5(e.target.value)}} disabled className = {style.textFieldClass} variant="filled" label = {props.TableFields.columns[5]}/>:
                <TextField value = {props.Field5} onChange={(e)=>{props.handleField5(e.target.value)}} className = {style.textFieldClass} variant="filled" label = {props.tabActive === 0 ? props.TableFields.columns[4] : props.tabActive === 1 ? props.TableFields.columns[3] :  props.TableFields.columns[5] }/>
                }
            </Grid>
            { props.tabActive === 2 ?
            <Grid item xs={12} sm={12}>
                <DropDown value = { props.Field6 }  handleChange = {props.handleField6} code = {1} Data = {props.Users}  label = {props.TableFields.columns[2]} />
            </Grid> : <></>
            }
        </Grid>
    </Box>
    </>
   ); 
}

export default CustomForm;