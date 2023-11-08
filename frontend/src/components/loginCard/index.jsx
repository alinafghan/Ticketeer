import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CustomButton from '../customButton';
import { TextField } from '@mui/material';
import style  from "./styleSheet.module.css"

const loginCard = () => {

    // function handleSaveInfo(){
    //     let connections;
    //     try{
    //         // connections = await getConnection();
    //     }
    // }

    return(
        <>
        <Box>
            <Card sx={{ maxWidth: 400 }}>
                <CardContent>
                    <div className = {style.alignment}>
                    {/* <TextField className={style.textField} variant = {"filled"} label = {"UserName"}/>

                    <TextField className={style.textField} variant = {"filled"} label = {"Password"} type = {"password"}/>
                    <TextField className={style.textField} variant = {"filled"} label = {"PortNumber"} type = {"number"}/> */}

                    <div className = {style.divAlignment}>
                    {/* <CustomButton ButtonName = {"Save Info"}/> */}
                    {/* <div style={{padding:"5px"}}></div> */}
                    <CustomButton ButtonName = {"Add Mock Data"}/>
                    </div>
                    </div>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}

export default loginCard