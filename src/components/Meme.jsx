import { useState } from "react"
import memesData from "../data/memesData"

export default function Meme() {
        const [meme, setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImage: ""
        })

        const [allMemeImages, setAllMimeImages] = useState(memesData)

        function getMemeImage() {
            const memesArray = allMemeImages.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))  
        }

        function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }
        
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Texte du haut"
                    className="form--inputs"
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                 />
                <input 
                    type="text"
                    placeholder="Texte du bas"
                    className="form--inputs"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                />
                <input 
                    type="button"
                    onClick={getMemeImage} 
                    className="form--button"
                    value="Recever une nouvelle image a mimer 🖼"
                    name="randomImage" />
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}