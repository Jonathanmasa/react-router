import { useState, useEffect } from "react";
// import axios
import axios from "axios";
// aggiungo uso link in listato
import { Link } from "react-router-dom";

const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: [],
};

const PostsFile = () => {

    const [post, setPost] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    // Fetching dei dati
    function fetchPosts() {
      axios.get("http://localhost:3000/posts")
        .then((res) => 
          setPost(res.data)
        )
    }
    // Solo al primo rendering
    useEffect(fetchPosts, []);

    // gestisco info nei campi form
    function handleFormData(e) {
        // gestione value per tipo di input
        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        // setto tramite useState l'oggetto con le info prese dai campi del form
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }
    
    // gestione invio form
    function handleSubmit(e) {
        e.preventDefault();
        // chiamata API e invio dati nuovo post
        axios.post("http://localhost:3000/posts", formData)
            .then( res => {
                // console.log(res.data)
                setPost((post) => [...post, res.data])
                
            })
            .catch(err => console.log(err))
      
      
        setFormData(initialFormData);
      }

    //   cancellazione pizza
        function deletePost(idArticolo) {
            // creiamo il nuovo array da sostituire allo state post
            const updateArticoli = post.filter((articolo) => {
                return articolo.id !== idArticolo;
            })
    
            // chiamata ad API sulla rotta di delete
            axios.delete(`http://localhost:3000/posts/${idArticolo}`)
                .then(res =>
                    console.log(res),
                    
                    setPost(updateArticoli)
                )
                .catch(err => console.log(err))
    
    
        }
            
    

    return (
        <>
            <h1 className="d-flex justify-content-center m-4">BLOG</h1>

            <form className="d-flex justify-content-center " action="#">
                <input
                 type="text" 
                 name="title"
                 onChange={handleFormData}
                 value={formData.title}
                 placeholder="Nome prodotto"
                />

                <input
                type="text"
                 name="content"
                 onChange={handleFormData}
                 value={formData.content}
                 placeholder="contenuto"
                />

                <input
                 type="src" 
                 name="image"
                 onChange={handleFormData}
                 value={formData.image}
                 placeholder="immagine"
                />

                <input
                 type="text" 
                 name="tags"
                 onChange={handleFormData}
                 value={formData.tags.join(",")}
                 placeholder="tags"
                />

                <button onClick={handleSubmit}>Aggiungi</button>
            </form>

            {
                post.map((articolo) => (
                    <div className="card m-3" key={articolo.id}>
                        <div className="card-header">
                        <h4 className="card-title">{articolo.title}</h4>
                        </div>

                        <div className="card-body">
                            {/* <h5 className="card-title">{articolo.autore}</h5> */}
                            <p className="card-text">{articolo.content}</p>
                            <p className="card-text"><img className="img-fluid w-25" src={articolo.image} alt={articolo.content} /></p>
                            <p className="card-text">{articolo.tags.join(",")}</p>
                            <Link className="m-2 btn " to={`/posts/${articolo.id}`}>Vai al dettaglio</Link>
                            <button onClick={() => deletePost(articolo.id)}>Cancella</button>
                        </div>
                    </div>

                ))
            }
        </>
    )

}

export default PostsFile