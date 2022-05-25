import Breadcrumb from "./Components/Breadcrumb";
import Navbar from "./Components/Navbar";
import LayoutSidenav from "./Components/LayoutSidenav";

function App(){
    return(
        <div>
            <Navbar/>
                <div id="layoutSidenav">
                    <LayoutSidenav/>
                    <Breadcrumb/>
                </div>
        </div>
    );
}

export default App;