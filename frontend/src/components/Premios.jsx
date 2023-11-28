import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Movie } from 'tabler-icons-react';
import { Users } from 'tabler-icons-react';


export const Premios = ({ language, changeToEnglish, changeToCatalan, changeToSpanish }) => {

const images = ["https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669478/1700492425579_hner9v_qxajxe.jpg",
 "https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669464/1700492774312_fvzskj_asqn1s.jpg",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669483/1700492774192_v6huvj_vb5e5p.jpg",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669458/1700493211611_tm6cdd_lvgldz.jpg",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669488/IMG_20231027_153854_hgfhgc_dnzzgl.jpg",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700958879/IMG_20231118_111259_uuotrs.webp",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669479/1700492425561_gd2nc0_qppnai.jpg",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700958873/IMG_20231118_111209_ukzv1o.webp",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700958724/IMG_20231118_111030_hugqfp.webp",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700502923/1700493583628_hsmy3c.jpg",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700959099/IMG_20231118_111303_lq17nc.webp",
"https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700669490/IMG_20231027_152630_vv3mj3_epslut.jpg",
]
const [visibleParagraph, setVisibleParagraph] = useState(0);

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const secondParagraph = document.querySelector('.parrafo:nth-child(2)');
  const thirdParagraph = document.querySelector('.parrafo:nth-child(3)');

  if (secondParagraph && scrollPosition > secondParagraph.offsetTop) {
    setVisibleParagraph(1);
  }

  if (thirdParagraph && scrollPosition > thirdParagraph.offsetTop) {
    setVisibleParagraph(2);
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
   <>

      <div className='NavHeader'>
      <button className='botonTraduccion' onClick={changeToEnglish} disabled={language === 'en'}>
          EN |
        </button>
        <button className='botonTraduccion' onClick={changeToCatalan} disabled={language === 'cat'}>
          CAT |
        </button>
        <button className='botonTraduccion' onClick={changeToSpanish} disabled={language === 'es'}>
          ES 
        </button>
      </div>
<div className='componentPremios'>
      <h1 className='premiosEntrada'>
      
      {language === 'es'
          ? 'Premios y Nominaciones'
          : language === 'en'
          ? 'Awards and Nominations'
          : language === 'cat'
          ? 'Premis i Nominacions'
          : ''}
      </h1>
<div className='introPremios'>

 <div className='textoPremios'>
 <p className={`parrafo ${visibleParagraph >= 0 ? 'visible' : ''}`}>
        {language === 'es'
          ? `Somos la única productora española que ha obtenido el prestigioso Gran Premio del Jurado en el Festival de Publicidad de Cannes. Entre nuestras producciones más destacadas se encuentra "El Orfanato" (2007), dirigida magistralmente por J.A. Bayona, que ha recibido numerosos reconocimientos, incluyendo 7 Premios Goya. Además, fue nominada al premio BAFTA a la Mejor Película de Habla No Inglesa y seleccionada en el Festival de Cannes en 2007. También tuvo el honor de representar a España como la candidata oficial para el premio a la Mejor Película de Habla No Inglesa en los Premios de la Academia.`
          : language === 'en'
          ? `We are the only Spanish production company that has won the prestigious Grand Jury Prize at the Cannes Advertising Festival. Among our most notable productions is "The Orfanato" (2007), masterfully directed by J.A. Bayona, which has received numerous accolades, including 7 Goya Awards. It was also nominated for the BAFTA Award for Best Film Not in the English Language and selected at the Cannes Film Festival in 2007. It also had the honor of representing Spain as the official candidate for the Best Foreign Language Film at the Academy Awards.`
          : language === 'cat'
          ? `Som l'única productora espanyola que ha obtingut el prestigiós Gran Premi del Jurat al Festival de Publicitat de Cannes. Entre les nostres produccions més destacades es troba "El Orfanato" (2007), dirigida magistralment per J.A. Bayona, que ha rebut nombrosos reconeixements, incloent 7 Premis Goya. A més, va ser nominada al premi BAFTA a la Millor Pel·lícula de Llengua No Anglesa i seleccionada al Festival de Cannes el 2007. També va tenir l'honor de representar Espanya com a candidata oficial al premi a la Millor Pel·lícula de Llengua No Anglesa als Premis de l'Acadèmia.`
          : ''}
      </p>

      <p className={`parrafo ${visibleParagraph >= 1 ? 'visible' : ''}`}>
        {language === 'es'
          ? `Otro éxito de nuestra filmografía es "Los Ojos de Julia" (2010), dirigida por Guillem Morales. Esta película también ha recibido reconocimientos, siendo nominada a los Premios Gaudí a la Mejor Película en Lengua No Catalana, lo que destaca nuestra contribución continua al panorama cinematográfico. Además, recientemente, nos enorgullece compartir que "PSICARIO" ganó el Premio al Mejor Cortometraje Nacional Ficción en la XII Edición del Festival Nacional de Cortometrajes y Audiovisual de Rafal.`
          : language === 'en'
          ? `Another success in our filmography is "Julia's Eyes" (2010), directed by Guillem Morales. This film has also received recognition, being nominated for the Gaudí Awards for Best Film in a Non-Catalan Language, highlighting our continued contribution to the film landscape. Additionally, we are proud to share that "PSICARIO" won the Best National Fiction Short Film Award at the XII National Short Film and Audiovisual Festival of Rafal.`
          : language === 'cat'
          ? `Un altre èxit de la nostra filmografia és "Els Ulls de Julia" (2010), dirigida per Guillem Morales. Aquesta pel·lícula també ha rebut reconeixements, sent nominada als Premis Gaudí a la Millor Pel·lícula en Llengua No Catalana, la qual cosa destaca la nostra contribució contínua al panorama cinematogràfic. A més, recentment, ens enorgulleix compartir que "PSICARIO" va guanyar el Premi a la Millor Curtmetratge Nacional Ficció a la XII Edició del Festival Nacional de Curtmetratges i Audiovisual de Rafal.`
          : ''}
      </p>

      <p className={`parrafo ${visibleParagraph >= 2 ? 'visible' : ''}`}>
        {language === 'es'
          ? `Adicionalmente, queremos destacar "Secuestrados" (2010), galardonada con el Premio Gaudí a la Mejor Película en Lengua No Catalana, y "La hija del ladrón" (2019), que recibió la Biznaga de Plata a la Mejor Dirección en el Festival de Málaga. Estos logros reflejan nuestro compromiso constante con la excelencia y la notable influencia en la industria del cine. Además, en el 2023, Mar Targarona fue honrada con el Premio Honorífico en la 42ª Edición del Festival de Cine de Terror de Molins de Rei, destacando su contribución significativa al mundo del cine.`
          : language === 'en'
          ? `Additionally, we want to highlight "Kidnapped" (2010), awarded the Gaudí Award for Best Film in a Non-Catalan Language, and "The Daughter of the Thief" (2019), which received the Silver Biznaga for Best Direction at the Malaga Film Festival. These achievements reflect our constant commitment to excellence and the significant influence on the film industry. Additionally, in 2023, Mar Targarona was honored with the Honorary Award at the 42nd Edition of the Molins de Rei Horror Film Festival, highlighting her significant contribution to the world of cinema.`
          : language === 'cat'
          ? `Addicionalment, volem destacar "Segrestats" (2010), guardonada amb el Premi Gaudí a la Millor Pel·lícula en Llengua No Catalana, i "La filla del lladre" (2019), que va rebre la Biznaga de Plata a la Millor Direcció al Festival de Màlaga. Aquests èxits reflecteixen el nostre compromís constant amb l'excel·lència i la notable influència en la indústria del cinema. A més, al 2023, Mar Targarona va ser honorada amb el Premi Honorífic a la 42a Edició del Festival de Cinema de Terror de Molins de Rei, destacant la seva contribució significativa al món del cinema.`
          : ''}
      </p>
    </div>

<div className='carruselPremios'>
 <Carousel autoPlay interval={2900} infiniteLoop={true} showStatus={false} 
 showThumbs={false} transitionTime={1000} stopOnHover={false} emulateTouch>
{images.map((image, index) => (
<div key={index}>
<img className='imagenesPremios' src={image} alt={`Slide ${index}`} />
 </div> ))}
</Carousel> 





<div className='fichasPremios'>
<div class="card">
 <div class="image-container">
        <img src='https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700678145/1700492425528_bzalby_eq4hsf.jpg' alt="Profile Photo"/>
      </div>
      <div class="content">
        <h2 class="profile-name">
        Premio al mejor Cortometraje Nacional Ficción: PSICARIO </h2>
        <p class="job-title">“RAFAL EN CORTO”</p>
        <p class="description">  XII EDICIÓN FESTIVAL NACIONAL DE CORTOMETRAJES Y AUDIOVISUAL DE RAFAL</p>
      </div>
      <div class="social-links">
        <a href="#">
        <Movie size={38} strokeWidth={2} color={'orange'}/>
        </a>
        <a  href="#">
         <Users size={38} strokeWidth={2} color={'blue'}  />
        </a>
       </div>
</div>

<div class="card">
       <div class="image-container">
        <img src='https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700679972/1700492425510_pdrzjt_1_nzyhvb.jpg' alt="Profile Photo"/>
      </div>
      <div class="content">
        <h2 class="profile-name"> Premio Honorífico a Mar Targarona 
         </h2>
        <p class="job-title">“TERROR DE MOLINS”</p>
        <p class="description"> 42º EDICIÓN DEL FESTIVAL DE CINE DE TERROR DE MOLINS DE REI</p>
      </div>
      <div class="social-links">
        <a href="#">
        <Movie size={38} strokeWidth={2} color={'orange'} />
        </a>
        <a  href="#">
        <Users size={38} strokeWidth={2} color={'blue'}  />
        </a>

       </div> </div>
       </div>

</div>

</div>

</div>


   </>
  )
}
