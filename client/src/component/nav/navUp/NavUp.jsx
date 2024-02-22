import n from './NavUp.module.css'

const NavUp = () => {
    return (
        <div className={n.navHome}>
            <h1 className={n.logo}>Rick and Morty</h1>
            <div className={n.botonera}>
                <div>LinkedIn</div>
                <div>GitHub</div>
                <div>Mi Perfil</div>
            </div>
        </div>
    )
}

export default NavUp