export default function Meme() {
    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--inputs" />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--inputs" />
                <input 
                    type="button" 
                    className="form--button"
                    value="Get a new meme image 🖼" />
            </form>
        </main>
    )
}