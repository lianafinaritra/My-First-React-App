
export default function NavlinkCollapsed(props){
    const {label, target, controls, classe} = props;
    return (
        <a class="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={controls}>
            <div class="sb-nav-link-icon"><i class={classe}></i></div>
                            {label}
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
    );
}