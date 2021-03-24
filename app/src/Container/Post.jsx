import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import Loader from '../Components/Loader/Loader';

function Post() {
    const [list, setList] = useState([]);
    const [loader, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("https://examplebd.com/api/live-classes?user_id=10089", {
        method: "POST"
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setList(data);
        })
        .catch((err) => {
            history.push('/404');
        })
    }, [history]);

    let allList = <Loader/>

    if(loader === false){
        allList = <Grid container justify={'center'}>
                        <Grid item md={4}>
                            <Grid container spacing={2}>
                                {
                                    list.map((value, idx) => {
                                        return <Grid item md={4} key={idx} >
                                                    <Card>
                                                        <CardContent justify={'left'}>
                                                            <div>
                                                                <div >
                                                                    <p>{value.id}</p> 
                                                                    <p>{value.live_type}</p> 
                                                                    <p>{value.title}</p> 
                                                                    <p>{value.user_id}</p> 
                                                                    <p>{value.user_name}</p> 
                                                                    <p>{value.course_title}</p> 
                                                                    <p>{value.meeting_id}</p> 
                                                                    <p>{value.meeting_password}</p> 
                                                                    <p>{value.starting_time}</p> 
                                                                    <p>{value.ending_time}</p>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
    }
    
    return (
        <>
            {allList}
        </>        

    );
}

export default Post;

