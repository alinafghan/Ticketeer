import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";

const DropDown = (props)=>{


    return(
        <FormControl variant="standard" sx={{ m: 1, width:"100%" }}>
        <InputLabel id="demo-simple-select-standard-label">{props.label ?? "No-Label"}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.value ?? ""}
          onChange={(e) => {props.handleChange(e.target.value)}}
          label={props.label ?? "No-Label"}
        >
            {
                props.Data.map((item)=>{
                  return(
                    <MenuItem value = {props.code !== 1 ? item.Desert : item.Name}>{props.code !== 1 ? item.Desert : item.Name}</MenuItem>
                  )
                })
            }
        </Select>
      </FormControl>
    )
}

export default DropDown;