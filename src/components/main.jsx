import '../styles/main.css';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import Bag from './bag.jsx'; 
import { NavLink } from 'react-router-dom';

const Main = () => {
    const [cartItems, setCartItems] = useState({});
    const [showBag, setShowBag] = useState(false); // Estado para controlar a visibilidade da Bag

    const handleAddItem = (item) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            if (newItems[item]) {
                newItems[item] += 1;
            } else {
                newItems[item] = 1;
            }
            return newItems;
        });
    };

    const toggleBag = () => {
        setShowBag(showBag); // Alterna entre mostrar e esconder a Bag
    };

    return (
        <>
            <header>
                
                <h1 className='title'>Adicione os Produtos</h1>
                <NavLink to="/Bag"><FaShoppingCart className='icon' onClick={toggleBag}/></NavLink>
            </header>

            <main>
                <section className='main-container'>
                    <div className='container'>
                        <div className='produtos' onClick={() => handleAddItem('Creme de leite Nestle original')}>
                            <p>Creme de leite Nestle original</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos' onClick={() => handleAddItem('Sabonete em barra Dove original')}>
                            <p>Sabonete em barra Dove original</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos' onClick={() => handleAddItem('Fósforo Fiat Lux Pinheiro')}>
                            <p>Fósforo Fiat Lux Pinheiro</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos' onClick={() => handleAddItem('Gelatina Diet Dr. Oetker sabor Abacaxi')}>
                            <p>Gelatina Diet Dr. Oetker sabor Abacaxi</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos' onClick={() => handleAddItem('Extrato de Tomate Elefante')}>
                            <p>Extrato de Tomate Elefante</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos' onClick={() => handleAddItem('Creme dental Colgate Tripla Ação')}>
                            <p>Creme dental Colgate Tripla Ação</p>
                            <CiSquarePlus className='add' />
                        </div>

                        <div className='produtos' onClick={() => handleAddItem('Bebida Láctea UHT Toddynho Sabor Chocolate')}>
                            <p>Bebida Láctea UHT Toddynho Sabor Chocolate</p>
                            <CiSquarePlus className='add' />
                        </div>
                    </div>
                </section>
            </main>

            {showBag && <Bag cartItems={cartItems} />}
        </>
    );
};

export default Main;
