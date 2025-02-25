import axios from "axios";
import { useState, useEffect } from 'react';
// import della parte di ritorno parametro rotta front end
import { useParams } from "react-router-dom";
// aggiunta  uso link per paginazione (prev next dettagli)
import { Link } from "react-router-dom";

export default function PostDetail() {

    // destructuring per ritornare l'id 
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [post, setPost] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(), [id])


    return (
        <>
            <nav className="m-3">
                <Link to={`/posts/${parseInt(id) - 1}`}>Indietro</Link>
                <Link className="m-1" to={`/posts/${parseInt(id) + 1}`}>Avanti</Link>
            </nav>
            <h5>{post.title}</h5>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
            
        </>
    );
}