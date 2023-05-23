import React from "react";
// import '../public/style.css';
// import '../css/bootstrap.min.css';
// import '../css/font-awesome.min.css';
// import '../css/owl.carousel.css';
// import '../css/responsive.css'

export class MainMenu extends React.Component {
    render() {
        return (
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Home</a></li>
                                <li className="active"><a href="#">Shop page</a></li>
                                <li><a href="#">Single product</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Category</a></li>
                                <li><a href="#">Others</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}