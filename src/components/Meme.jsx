import { useState } from "react"
import memesData from "../data/memesData"

export default function Meme() {
        const [meme, setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImage: ''
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
        
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Texte du haut"
                    className="form--inputs" />
                <input 
                    type="text"
                    placeholder="Texte du bas"
                    className="form--inputs" />
                <input 
                    type="button"
                    onClick={getMemeImage} 
                    className="form--button"
                    value="Recever une nouvelle image a mimer 🖼" />
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}