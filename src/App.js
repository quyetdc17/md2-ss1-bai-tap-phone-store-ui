// import logo from './logo.svg';
// import '../public/style.css';
// // // import './App.css';
// import './css/bootstrap.min.css';
// import './css/font-awesome.min.css';
// import './css/owl.carousel.css';
// import './css/responsive.css'
// import {Component} from "react";
import {Header} from './Header';
import {MainMenu} from './MainMenu';
import {Component} from "react";
import { SingleProductArea } from './Single-product-area';
import { Product_big } from './Product_big';
import { FooterArea } from './FooterArea';
class App extends Component {
    render() {
        return (
            <div className="App">
                {/*Header */}
                <Header/>

                {/*End header area */}

                {/*End site branding area */}
                <MainMenu/>

                {/*End mainmenu area */}
                <Product_big/>

                

                {/*List product */}
                <SingleProductArea/>
                

                {/*/!*Footer area *!/*/}
                <FooterArea/>
                

                
            </div>
        );
    }
}

export default App;
