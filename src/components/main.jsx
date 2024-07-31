import '../styles/main.css';
import { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";


const Main = () => {

    return (
        <>
            <header>
                <FaShoppingBag className='icon' />
                <h1 className='title'>Adicione os Produtos</h1>
            </header>

            <main>
                <section className='main-container'>
                    <div className='container'>
                        <div className="produtos">
                            <p>Creme de leite Nestle original</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className="produtos">
                            <p>Sabonete em barra Dove original</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className="produtos">
                            <p>Fósforo Fiat Lux Pinheiro</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className="produtos">
                            <p>Gelatina Diet Dr. Oetker sabor Abacaxi</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos'>
                            <p>Extrato de Tomate Elefante</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className="produtos">
                            <p>Creme dental Colgate Tripla Ação</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className="produtos">
                            <p>Bebida Láctea UHT Toddynho Sabor Chocolate</p>
                            <CiSquarePlus className='add' />
                        </div>
                    </div>
                </section>
            </main>

        
        </>
    );
};

export default Main;
