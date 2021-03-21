import './register.css'
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import API from "../../api/api";


const Register = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory()
    const navigate = (path) => {
        history.push(path)
    }
    const send = () => {
        const data = {firstName, lastName, email, password}
        API.post('/register', data)
            .then(res => {
                console.log(res.data)
                if (res.data.status === true) {
                } else {
                    navigate('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className={'container-rgister'}>
            <div className={'card-rgister'}>
                <div className={'title-rgister'}>
                    <span className={'title-text-rgister'}>Register</span>
                </div>

                <div className={'inputs-rgister'}>
                    <input
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        placeholder={'Prenom'}/>
                    <input
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        placeholder={'Nom'}/>

                    <input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder={'Login'}/>
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type={'password'} placeholder={'Password'}/>

                </div>
                <div className={'actions-rgister'}>
                    <div onClick={send} className={'auth-rgister'}>
                        <span> S'inscrire</span>
                    </div>
                    <div className={'register-rgister'}>
                        <Link to="/login">Se connecter</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
