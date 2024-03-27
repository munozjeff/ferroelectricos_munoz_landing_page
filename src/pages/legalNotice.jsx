import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

function LegalNotice(params) {
    return(
        <>
            <Header/>
            <div className='info'>
                <h2>AVISO LEGAL</h2>
                <h3>Identificación del titular del sitio web</h3>
                <p>En cumplimiento con el artículo 13 de la Ley 1266 de 2008 y el artículo 17 de la Ley 1581 de 2012, se hace constar que el titular de este sitio web es [Nombre o Razón Social], identificado con NIT [número de identificación tributaria], con domicilio en [dirección].</p>
                <h3>Propiedad intelectual e industrial</h3>
                <p>El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, textos y/o gráficos son propiedad del titular del sitio web o en su caso dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran protegidos por la normativa de propiedad intelectual e industrial.</p>
                <h3>Condiciones de uso</h3>
                <p>El acceso y uso de este sitio web atribuye la condición de usuario, lo que implica la aceptación plena y sin reservas por parte del usuario de todas las condiciones de uso que se encuentren vigentes en cada momento en que acceda al sitio web. El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de los contenidos ofrecidos en el mismo, respetando en todo momento la legalidad vigente y los derechos del titular del sitio web y de terceros.</p>
                <h3>Limitación de responsabilidad</h3>
                <p>El titular del sitio web no se hace responsable de los daños y perjuicios que puedan derivarse de la falta de disponibilidad o continuidad del funcionamiento del sitio web y de los servicios ofrecidos en el mismo, así como tampoco se hace responsable de los posibles errores o deficiencias de seguridad que puedan producirse debido al uso de versiones de navegadores no actualizadas.</p>
                <h3>Protección de datos personales</h3>
                <p>En cumplimiento con lo establecido en la Ley 1581 de 2012 y el Decreto 1377 de 2013, se informa al usuario de que los datos personales que se recogen a través de este sitio web serán tratados de conformidad con lo establecido en la Política de Privacidad.</p>
                <h3>Ley aplicable y jurisdicción</h3>
                <p>La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso Legal, así como cualquier cuestión relacionada con los servicios del sitio web, será la ley colombiana. Para la resolución de cualquier conflicto que pueda surgir con ocasión de la utilización del sitio web, las partes se someten a los Juzgados y Tribunales de Cali.</p>
            </div>
            <Footer/>
        </>
    )
}

export {LegalNotice}