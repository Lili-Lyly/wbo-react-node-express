import './login.css'
import {
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    Slide
} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import {forwardRef, useState} from "react";
import API from "../../api/api";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory()
    const navigate = (path) => {
        history.push(path)
    }
    const login = () => {
        const data = {
            email: username,
            password: password
        }
        API.post('/login', data).then(res => {
            if (res.data.status === false) {
                alert(res.data.msg)
            } else {
                localStorage.setItem('user', JSON.stringify(res.data))
                navigate('/accueil')
            }
        }).catch(error => {
            console.log(error)
        })
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={'new-login-container'}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Information"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <Card className={'new-login-card'}>

                <h2 className={'bienvenue'}>Bienvenue dans Votre Espace Patient AP-HA</h2>

                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">veuillez saisir votre e-mail</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">mot de passe</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        value={password}
                        onChange={(event => setPassword(event.target.value))}
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock/>
                            </InputAdornment>
                        }
                    />
                    {message && (
                        <span>{message}</span>
                    )}
                </FormControl>
                <Button onClick={login} variant="contained" color="primary" disableElevation>
                    S'identifier
                </Button>
            </Card>
        </div>
    )
}

export default Login;
