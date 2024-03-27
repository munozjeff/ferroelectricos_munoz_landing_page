import React from 'react';
import { Header } from '../components/header/header';
import "./style.css"
import { CardAbout } from '../components/cardAbout/cardAbout';
import { CarouselComponent } from '../components/carousel/carousel';
import { Footer } from '../components/footer/footer';
import logo from "../assets/albañil.png"
import respect from "../assets/respect.png"
import service from "../assets/service.png"
import discipline from "../assets/discipline.png"
import ferreteria from "../assets/ferreteria.jpg"
import architect from "../assets/architect.png"
import lighting from "../assets/lighting.png"
import basin from "../assets/basin.png"
import house from "../assets/house.png"
import techo from "../assets/techo.png"
import spray_paint from "../assets/spray-paint.png"
import tool_box from "../assets/tool-box.png"

 function LandingPage() {
    return(
        <>
            <Header/>
            <section className='first-section'>
                <img src={logo} alt='logo'/>
                <h1 className='landingpage-title'>FERROELECTRICOS Y SOLUCIONES MUÑOZ</h1>
            </section>
            <section className='about'>
                <article>
                    <div>
                        <h2>¿Quienes Somos?</h2>
                        <p> 
                            Somos líderes en distribución de materiales y acabados de 
                            construcción, perfilería metálica y ferretería en general. 
                            Nuestra seriedad, transparencia y honestidad nos han hecho 
                            ganadores de esta posición después de 40 años de crecimiento 
                            continuo. Nuestra misión es poner a disposición del consumidor 
                            productos de alta calidad, mediante un servicio diferenciador y 
                            el mejor precio del mercado.
                        </p>
                    </div>
                </article>
                <article>
                    <CardAbout 
                        title='Respeto' 
                        image={respect} 
                        paragraph='Valoramos el trato respetuoso entre nuestros colaboradores y la comunicación clara y abierta.'/>
                    <CardAbout
                        title='Servicio'
                        image={service}
                        paragraph='Brindar ayuda de manera espontánea aún en los detalles más pequeños.'/>
                    <CardAbout
                        title='Disciplina'
                        image={discipline}
                        paragraph='Valoramos a las personas comprometidas con su trabajo y consigo mismas para lograr a través de la perseverancia las metas propuestas.'
                    />
                </article>
            </section>
            <section className='visitanos'>
                <h2>VISÍTANOS EN NUETRA SEDE</h2>
                <p>
                    Visítanos en nuestra sede principal ubicada en el barrio el paraiso,
                     contamos con amplio inventario en materiales y  
                     herramientas para la construccion con un equipo de 
                     trabajo a disposición para brindar el mejor servicio a 
                     nuestros clientes.
                </p>
                <img src={ferreteria} alt="" />
            </section>
            <section className='productos'>
                <h2>LO QUE TENEMOS PARA TI</h2>
                <h3>"¡Ven y descubre todo lo que necesitas para tus proyectos en nuestra 
                    ferretería! Te esperamos con la mejor selección de herramientas y
                     materiales. ¡No te lo pierdas!</h3>
                <article>
                    <CardAbout
                        title='CONSTRUCCIÓN'
                        image={architect}
                        paragraph='HIERRO - CEMENTO  - MALLAS ELECTROSOLDADAS  - CARRETILLAS - MANGUERAS - LADRILLO - FAROL - ARENA - TRITURADO - BLOQUELON'
                    ></CardAbout>
                    <CardAbout
                        title='INSUMOS ELÉCTRICOS'
                        image={lighting}
                        paragraph='ALAMBRES SOLIDOS - ALAMBRES 7 HILOS - DUPLEX - 
                                ALAMBRES CONCENTRICOS - TUBERÍA CONDUIT - BREAKERS Y TABLEROS DE DISTRIBUCIÓN - 
                                INTERRUPTORES Y PULSADORES - TOMACORRIENTES - FOCOS Y LUMINARIAS - 
                                ILUMINACIÓN LED - CANALETAS DEXON - DUCHAS ELECTRICAS'
                    ></CardAbout>
                    <CardAbout
                        title='HIDROSANITARIA'
                        image={basin}
                        paragraph='TUBERÍA PVC - 
                                MANGUERAS AGUA - ACCESORIOS' 
                    ></CardAbout>
                    <CardAbout
                        title='ACABADOS'
                        image={house}
                        paragraph='GRIFERÍA - SANITARIOS - 
                                LAVADEROS - ESTUCO - FRAGUAS' 
                    ></CardAbout>
                    {/* <CardAbout
                        title='PERFILERÍA'
                        image='/src/assets/girder.png'
                    ></CardAbout> */}
                    <CardAbout
                        title='TECHOS'
                        image={techo}
                        paragraph='TECHOS DE ETERNIT - TECHOS DE ZINC - HOJAS TRANSLUCIDAS - 
                                 - ACCESORIOS DE FIJACIÓN'
                    ></CardAbout>
                    <CardAbout
                        title='PINTURAS Y LACAS'
                        image={spray_paint}
                        paragraph='PINTURAS CONDOR PINTURAS PINTUCO - RESINAS Y PEGAS - 
                                    PINTURAS SPRAY - EMPASTES SIKA - LACAS PARA MADERA
                                     - BROCHAS Y RODILLOS'
                    ></CardAbout>
                    <CardAbout
                        title='FERRETERÍA'
                        image={tool_box}
                        paragraph='HERRAMIENTAS PARA LA CONSTRUCCÍON - 
                                    ACCESORIOS INDUSTRIALES - CHAPAS Y CANDADOS - PLOMERÍA - 
                                    CARPINTERÍA - MALLAS - FERRETERÍA EN GENERAL'
                    ></CardAbout>
                </article>
                <h3>SERVICIO DE TRANSPORTE-ENTREGA EN PUNTO</h3>
            </section>
            <section className='marcas'>
                <h2>TRABAJAMOS CON LAS MEJORES MARCAS DEL MERCADO Y A LOS MEJORES PRECIOS</h2>
                <CarouselComponent/>
            </section>
            <Footer/>
        </>
    )
 }
 export {LandingPage}