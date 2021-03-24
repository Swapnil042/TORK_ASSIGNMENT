import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import Loader from '../Components/Loader/Loader';

function Get() {
    const [token, setToken] = useState('');
    const [loader, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("https://examplebd.com/api/get-csrf-token", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setToken(data);
        })
        .catch((err) => {
            history.push('/404');
        })
    }, [history]);

    let Token = <Loader/>

    if(loader === false){
        Token = <Grid container justify={'center'}>
                        <Grid item md={4}>
                            <Grid container spacing={2}>
                              <Grid item md={12}>
                                <Card>
                                    <CardContent>
                                       <h3>{token.csrf_token}</h3>
                                    </CardContent>
                                </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
    }
    
    return (
        <>
            {Token}
        </>        

    );
}

export default Get;

