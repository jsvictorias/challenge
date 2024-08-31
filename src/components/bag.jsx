import '../styles/bag.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosSkipBackward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Bag = ({ cartItems = {} }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div data-aos="fade">
            <header>
                <h1 className='title-bag'>Carrinho</h1>
                <NavLink to="/">
                    <button className='button'>Voltar <IoIosSkipBackward /></button>
                </NavLink>
            </header>
            <main>
                <section className='main-container-bag'>
                    <div className='container-bag'>
                        {Object.entries(cartItems).map(([item, quantity]) => (
                            <div key={item} className='cart-item'>
                                <p>{item}</p>
                                <p>Quantidade: {quantity}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <aside>
                <button className='start'>Iniciar</button>
            </aside>
        </div>
    );
};

export default Bag;
