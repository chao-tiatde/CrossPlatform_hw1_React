function Content() {
    return (
        <div className="container">

            <nav className="nav">
                <h2 className="home">Home</h2>
                <h2 className="aboutus">About Us</h2>
                <h2 className="vegetables">Vagateblas</h2>
                <h2 className="online">Online</h2>
                <h2 className="contact">Contact</h2>
            </nav>

            <img src="img/pumpkin.png" alt="pumpkin" width="1120px" height="448px" />
            <div className="aside">

                <div className="aside-left">
                    <div className="aside-left-bg">
                        <h3 className="aside-left-header">Vagateblas</h3>
                    </div>
                    <div className="aside-left-content">
                        <img src="img/carrot.png" alt="carrot" width="165px" height="140px" />
                        <img src="img/corn.png" alt="corn" width="165px" height="140px" />
                        <img src="img/pepper.png" alt="pepper" width="165px" height="140px" />
                    </div>
                </div>

                <div className="aside-right">
                    <div className="aside-right-bg">
                        <h3 className="aside-right-header">Contact</h3>
                    </div>
                    <div className="aside-right-content">
                        <p style={{ height: '54px', margin: 0 }}>For any questions or suggestions about
                            Vagateblas, Vagateblas Club or your online <br />order you can contact Vagateblas Customer Service by phone, email or post and we'll be <br />happy to help. But please do not copy YiJu, Chao's code.</p>
                        <hr />
                        <p style={{ margin: 0 }}>E-mail: tiatde0323@gmail.com</p>
                        <p style={{ margin: 0 }}>PHONE: +886-123-456-789</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;