import "./CreateNewBlogPost.css";
import {useState} from "react";
import timeStamper from "../../helpers/timeStamper.js";
import readTimer from "../../helpers/readTimer.js";
import {useNavigate} from "react-router-dom";

function CreateNewBlogPost() {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
        created: "",
        readTime: 0,
        comments: 0,
        shares: 0,
    });

    function handleFormChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    const [validationError, setValidationError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!formState.title || !formState.subtitle || !formState.author || !formState.content) {
            setValidationError("Alle velden invullen, alsjeblieft.");
            return;
        }
        if (formState.content.length < 300 || formState.content.length > 2000) {
            setValidationError("Je bericht is niet tussen de 300 en 2000 tekens lang.");
            return;
        }

        formState.comments = 0;
        formState.shares = 0;
        formState.created = timeStamper();
        formState.readTime = readTimer(formState.content);
        console.log(formState);
        navigate("/overview");

    }

    return (
        <>
            <h2>Post je geweldige blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titel*</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formState.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="subtitle">Subtitel*</label>
                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={formState.subtitle}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="author">Auteur*</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formState.author}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Bericht*</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Je bericht moet 300 tot 2000 tekens lang zijn"
                        value={formState.content}
                        onChange={handleFormChange}
                    />
                </div>

                <button type={"submit"}>Verzenden</button>
                {validationError.length > 0 && <p>{validationError}</p>}
            </form>
        </>
    )
}

export default CreateNewBlogPost;