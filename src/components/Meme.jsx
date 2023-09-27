import memesData from "../data/memesData"

export default function Meme() {
    function handleClick() {
        const memeImage = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeImage.length)
        const { url } = memeImage[randomNumber]
        console.log(url)
    }
    return (
        <main>
            <div className="form">
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
                    onClick={handleClick} 
                    className="form--button"
                    value="Get a new meme image 🖼" />
            </div>
        </main>
    )
}