import './navbar.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const Navbar = () => {
   const history = useHistory()
   const navigate  = (path)=>{
      history.push(path)
   }
    return(
<>
<div className={'principal-nav'}>

<div className={'text-nav'}>Assistance Publique Hôpital d'Alger</div> 

<div className={'trio'}>
<span onClick={()=>navigate('/register')}>S'enregistrer</span>

<span onClick={()=>navigate('/login')}> 
S'identifier</span>

<span>Professionnel de la santé</span>
</div>

<div className={'boutons'}>

<Button variant="contained" color="secondary">Covid-19 / #Vaccination-Info-Covid</Button>

<Button variant="contained" color="primary">Connaitre l'AP-HA</Button>

 <Button variant="contained" color="primary">l'AP-HA recrute</Button>

 <Button variant="contained" color="primary">Espace médias</Button>


</div>


    </div>

<form className={'recherche'}>
<TextField id="outlined-basic" label="Recherche" variant="outlined" />
    </form>



</>
    )
}


export default Navbar;