import Navlink from "./Navlink";
import Collapse from "./Collapse";
import NavlinkCollapsed from "./NavlinkCollapsed";

export default function LayoutSidenav(){
    return (
        <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Core</div>

                        <Navlink link="index.html" label="Dashboard">
                            <i class="fas fa-tachometer-alt"></i>
                        </Navlink>

                    <div class="sb-sidenav-menu-heading">Interface</div>

                    <NavlinkCollapsed label="Layouts" target="#collapseLayouts" controls="collapseLayouts" classe="fas fa-columns"/>

                    <Collapse id="collapseLayouts">
                        <a class="nav-link" href="layout-static.html">Static Navigation</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                    </Collapse>
            
                    <NavlinkCollapsed label="Pages" target="#collapsePages" controls="collapsePages" classe="fas fa-book-open"/>
                    
                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                Authentication
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <Collapse id="pagesCollapseAuth">
                                <a class="nav-link" href="login.html">Login</a>
                                <a class="nav-link" href="register.html">Register</a>
                                <a class="nav-link" href="password.html">Forgot Password</a>
                            </Collapse>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <Collapse id="pagesCollapseError">
                                <a class="nav-link" href="401.html">401 Page</a>
                                <a class="nav-link" href="404.html">404 Page</a>
                                <a class="nav-link" href="500.html">500 Page</a>
                            </Collapse>

                        </nav>
                    </div>
                    <div class="sb-sidenav-menu-heading">Addons</div>

                    <Navlink href="charts.html" label="Charts">
                        <i class="fas fa-chart-area"></i>
                    </Navlink>

                    <Navlink href="tables.html" label="Tables">
                        <i class="fas fa-table"></i>
                    </Navlink>

                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                    Start Bootstrap
                </div>
        </nav>
        </div>
    );
}