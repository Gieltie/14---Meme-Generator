import troll from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll}
                className='header--image' />
            <h2 className='header--title'>Generateur d'image Mimee</h2>
            <h4 className='header--project'>Made by Gael Hofman</h4>
        </header>
    )
}