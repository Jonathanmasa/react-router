// importiamo componente Logo
import Navbar from "./Navbar.jsx";


export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home Page', url: '/'},
        { id: 2, text: 'Chi Siamo', url: '/chi'},
        { id: 3, text: 'Lista dei Post', url: '/post'}
        
    ];

    return (
        <header className="position-fixed top-0 z-3">
            <Navbar linksProp={links} />
        </header>
    );
}