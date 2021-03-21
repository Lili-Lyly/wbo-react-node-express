import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



const Footer = () => {

    return (


<>

<div className={'principal-footer'}>

<div className={'nos-services'}>
    <h1>Nos services</h1>


<p><a href=""> service de cancerologie</a></p>
<p><a href ="">service des Urgences </a></p>
<p>centre d'Analyses medicales</p>
<p>centre de recherche</p>
    
</div>

<div className={'contactez-nous'}><h1>Contactez-nous</h1>

<p>11 chemin Marie curie, Alger 16000 - Algerie</p>
<p>Tel : +213 (0) 23 76 90 00</p>
<p>fax : +213 (0) 23 23 80 00</p>
<p>contact@hopitaldalger.com</p>

</div>


<div className={'restez-connecte'}><h1>Restez connecté</h1>

<p>Facebook <FaFacebook/></p>
<p>Twitter <FaTwitter/></p>
<p>Linkedin <FaLinkedinIn/></p>
<p>Youtube <FaYoutube className={'ico'}/></p>


</div>


</div>

<div className={'footer-title'}><h1>Assistance Publique Hôpital d'Alger</h1></div>
      <div className={'mentions'}>
<p>Mentions legales</p>
<p>FAQ</p>
<p>APHA 2021 <BiCopyright/></p>

      </div>



      

      </>     


    )
}

export default Footer;