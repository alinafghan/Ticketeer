import { Box, Grid } from "@mui/material";

import Container from '@mui/material/Container';
import LoginCard from "../../components/loginCard/index";
import style from "./styleSheet.module.css";

const Login = () => {
    return(
        <>
        <Container style = {{width : "100%" , height:"100vh" , display: "flex" , justifyContent : "center" , alignItems : "center"}}>
        <Box class = {style.LoginPage}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} style = {{display : "flex" ,justifyContent : "center" , alignItems : "center"}}>
                    <LoginCard />
                </Grid>
            </Grid>
        </Box>
        </Container>
        </>
    )
}

export default Login;