function Header({title}){
    return(
        <header className="header">
            <h1 className="header-left">Vagateblas</h1>
            <div className="header-right">
                <img src="img/facebook.png" alt="Facebook icon"/>
                <img src="img/instagram.png" alt="Instagram icon" className="instagram"/>
                <hr className="line"/>
                <p className="login">LOGIN</p>
                <p className="join">JOIN</p>
            </div>
        </header>
    );
}

export default Header;