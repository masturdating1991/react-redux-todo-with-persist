import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '30rem'
        }
    },
    input: {
        "&::placeholder": {
            fontSize: '3rem'
        }
    }
}));

function AddTodoInput() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'
        }}>
            <TextField className={classes.input} label="I want to do..." variant="outlined"/>
            <Button variant={"contained"} color={"primary"} style={{width:'2rem', height:'4rem',color:'white',fontSize:'1.2rem'}}>
                Add
            </Button>
        </form>
    );
}

export default AddTodoInput;