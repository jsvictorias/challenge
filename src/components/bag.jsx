import '../styles/bag.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bag = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);


    return(
        <div data-aos="fade">
            <header>
                <h1 className='title-bag'>Carrinho</h1>
            </header>
            <main>
                <section className='main-container-bag'>
                    <div className='container-bag'>
                        {/* Conteúdo do carrinho */}
                    </div>
                </section>
            </main>        
        </div>
    );
};

export default Bag;
