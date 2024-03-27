import React from 'react';
import './style.css'
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

function PrivacyPolicy() {
    return(
        <>
            <Header/>
            <div className='info'>
                <h2>POLÍTICA DE PRIVACIDAD</h2>
                <h3>Identificación del responsable del tratamiento</h3>
                <p>En cumplimiento con lo establecido en la Ley 1581 de 2012 y el Decreto 1377 de 2013, se informa al usuario de que los datos personales que se recogen a través de este sitio web serán tratados por [Nombre o Razón Social], identificado con NIT [número de identificación tributaria], con domicilio en [dirección], en adelante "el Responsable del Tratamiento".</p>
                <h3>Finalidades del tratamiento</h3>
                <p>Los datos personales que se recogen a través del sitio web serán tratados con las siguientes finalidades:</p>
                <ul>
                    <li>Gestionar el registro de los usuarios en el sitio web.</li>
                    <li>Facilitar la contratación de los servicios ofrecidos a través del sitio web.</li>
                    <li>Atender las consultas y solicitudes de los usuarios.</li>
                </ul>
                <h3>Legitimación para el tratamiento</h3>
                <p>La base jurídica que legitima el tratamiento de los datos personales del usuario es el consentimiento otorgado por el mismo al aceptar la presente Política de Privacidad.</p>
                <h3>Categorías de datos tratados</h3>
                <p>El Responsable del Tratamiento podrá recopilar y tratar las siguientes categorías de datos personales:</p>
                <ul>
                    <li>Datos identificativos: nombre, apellidos, dirección de correo electrónico, número de identificación, fecha de nacimiento, dirección postal, teléfono de contacto.</li>
                    <li>Datos de transacciones: número de tarjeta de crédito o débito, fecha de caducidad, código de seguridad.</li>
                    <li>Datos de navegación: dirección IP, tipo de dispositivo utilizado para acceder al sitio web, tipo de navegador utilizado para acceder al sitio web, páginas visitadas en el sitio web.</li>
                </ul>
                <h3>Destinatarios de los datos</h3>
                <p>Los datos personales que se recogen a través del sitio web podrán ser comunicados a los siguientes destinatarios:</p>
                <ul>
                    <li>Proveedores de servicios informáticos y de alojamiento web que colaboran con el Responsable del Tratamiento en la gestión del sitio web.</li>
                    <li>Entidades financieras encargadas de la gestión de los pagos de los usuarios.</li>
                    <li>Autoridades públicas en caso de que exista una obligación legal de hacerlo.</li>
                </ul>
                <h3>Derechos de los usuarios</h3>
                <p>Los usuarios podrán ejercer los siguientes derechos:</p>
                <ul>
                    <li>Derecho de acceso: el usuario tiene derecho a obtener información sobre los datos personales que el Responsable del Tratamiento tiene almacenados acerca de él.</li>
                    <li>Derecho de rectificación: el usuario tiene derecho a solicitar la rectificación de los datos personales inexactos o incompletos que el Responsable del Tratamiento tenga almacenados acerca de él.</li>
                    <li>Derecho de supresión: el usuario tiene derecho a solicitar la eliminación de los datos personales que el Responsable del Tratamiento tenga almacenados acerca de él.</li>
                    <li>Derecho de oposición: el usuario tiene derecho a oponerse al tratamiento de sus datos personales por parte del Responsable del Tratamiento.</li>
                    <li>Derecho a la portabilidad de los datos: el usuario tiene derecho a recibir los datos personales que haya proporcionado al Responsable del Tratamiento en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento.</li>
                    <li>Derecho a retirar el consentimiento: el usuario tiene derecho a retirar en cualquier momento el consentimiento otorgado</li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export {PrivacyPolicy}