import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

function Home(){
    return(
        <div className="container ma-auto main-layout">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Home