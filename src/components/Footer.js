import React from 'react';

const Footer = ({date}) => {
    return ( <footer className="footer">
        <div className="footer__container">
            <p className="footer__text">Sitio web desarrollado por <a href="https://quetzalbit.com/" target="_blank">Quetzalbit team</a>, todos los derechos reservados &copy; {date} </p>
        </div>
    </footer> );
}
 
export default Footer;