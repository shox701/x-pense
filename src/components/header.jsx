import Logo from "../assets/Logo.svg"
import "./header.scss"
import productimg from "../assets/bg.png"
import brands from "../assets/Brands.png"
const Header = () => {
    return (
        <header>
            <div className="header-container">
                <nav>
                    <img src={Logo} alt="" />
                    <div className="text-content">
                        <ul className="nav-items">
                            <li className="item"><a href="#">Features</a></li>
                            <li className="item"><a href="#">About us</a></li>
                            <li className="item"><a href="#">Pricing</a></li>
                            <li className="item"><a href="#">Feedback</a></li>
                        </ul>
                        <button className="button">Request a demo </button>
                    </div>
                </nav>
                <div className="hero-content">
                    <div className="left-content">
                        <h1 className="title">Track your Expenses & Save Money</h1>
                        <p className="text">Helps you to organize your income and expenses</p>
                        <div className="btn">
                            <button className="explore">Try free demo    ↓</button>
                            <h3>— Web, iOS and Android</h3>
                        </div>
                    </div>
                    <div className="right-content"></div>
                </div>
            </div>
            <div className="img-inner">
                <img className="product" src={productimg} alt="" />
            </div>
            <img className="brands" src={brands} alt="" />

        </header>
    )
}

export default Header