import React from 'react';
import { MapPin } from 'tabler-icons-react';
import { Mailbox } from 'tabler-icons-react';
import { PhoneCall } from 'tabler-icons-react';
import { BrandYoutube } from 'tabler-icons-react';
import { BrandTwitter } from 'tabler-icons-react';
import { BrandLinkedin } from 'tabler-icons-react';
// import { Login } from 'tabler-icons-react';
              

const Footer = ({language}) => {

 const youtube ="#" ;
 const linkedin ="#";
 const twitter = "#";

  return (
    <>
    <div className='componentFooter'></div>
<div className= 'padreFooter'>

<div className='logoFooter'>

  <img src='https://res.cloudinary.com/dvoh9w1ro/image/upload/v1701195280/Sem_T%C3%ADtulo-2_oowv09.png'/>
</div>

<div className='infoContacto'>
<p>
  <span className='iconTexto'>
    <PhoneCall size={20} strokeWidth={1} color={'white'} />
  </span>
  {language === 'es'
    ? 'Teléfono: '
    : language === 'en'
    ? 'Phone: '
    : language === 'cat'
    ? 'Telèfon: '
    : ''}
  <span className='informacionContacto'> (+34) 934.155.100 </span>
</p>

<p>
  <span className='iconTexto'>
    <Mailbox size={20} strokeWidth={1} color={'white'} />
  </span>
  {language === 'es'
    ? 'Email: '
    : language === 'en'
    ? 'Email: '
    : language === 'cat'
    ? 'Correu electrònic: '
    : ''}
  <span className='informacionContacto'> rodarbarcelona@rodaryrodar.com </span>
</p>

<p>
  <span className='iconTexto'>
    <MapPin size={20} strokeWidth={1} color={'white'} />
  </span>
  {language === 'es'
    ? 'Dirección: '
    : language === 'en'
    ? 'Address: '
    : language === 'cat'
    ? 'Adreça: '
    : ''}
  <span className='informacionContacto'>
    Carrer de L'Església, 4-6
    <br></br>
    Barcelona 08024
  </span>
</p>
</div>


<div>
<div className='socialMedia'>
  <a href={youtube} target="_blank" rel="noopener noreferrer">
  <BrandYoutube size={40} strokeWidth={2} color={'white'}/>
  </a>

  <a href={linkedin} target="_blank" rel="noopener noreferrer">
    <BrandLinkedin size={40} strokeWidth={2} color={'white'}/>
   </a>

  <a href={twitter} target="_blank" rel="noopener noreferrer">
  <BrandTwitter size={40} strokeWidth={2} color={'white'}/>
  </a>
</div>
<div className='enlacesInternos'>

<div className='enlacesFooter'>
  <a href='#'>
    {language === 'es'
      ? 'Inicio'
      : language === 'en'
      ? 'Home'
      : language === 'cat'
      ? 'Inici'
      : ''}
  </a>
  <a href='#'>
    {language === 'es'
      ? 'Nosotros'
      : language === 'en'
      ? 'About Us'
      : language === 'cat'
      ? 'Sobre Nosaltres'
      : ''}
  </a>
  <a href='#'>
    {language === 'es'
      ? 'Premios'
      : language === 'en'
      ? 'Awards'
      : language === 'cat'
      ? 'Premis'
      : ''}
  </a>
  <a href='#'>
    {language === 'es'
      ? 'Contacto'
      : language === 'en'
      ? 'Contact'
      : language === 'cat'
      ? 'Contacte'
      : ''}
  </a>
</div>

<div className='enlacesFooter'>
  <a href='#'>
    {language === 'es'
      ? 'Películas'
      : language === 'en'
      ? 'Movies'
      : language === 'cat'
      ? 'Pel·lícules'
      : ''}
  </a>
  <a href='#'>
    {language === 'es'
      ? 'Series'
      : language === 'en'
      ? 'TV Shows'
      : language === 'cat'
      ? 'Sèries'
      : ''}
  </a>
  <a href='#'>
    {language === 'es'
      ? 'Documentales'
      : language === 'en'
      ? 'Documentaries'
      : language === 'cat'
      ? 'Documentals'
      : ''}
  </a>
  <a href='#'>
    {language === 'es'
      ? 'Diseño Web'
      : language === 'en'
      ? 'Web Design'
      : language === 'cat'
      ? 'Disseny Web'
      : ''}
  </a>
</div>

</div>

</div>
</div>
    
<div className='footerFinal'>
<a href='#'>Policies</a>
<a href='#'>Cookies</a>
<a href='#'>Derechos de autor</a>
{/* <a href='#'><Login size={28} strokeWidth={2} color={'white'}/></a> */}
</div>   
    </>
  )
}

export default Footer