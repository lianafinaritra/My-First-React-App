
export default function Navlink(props){
    const {href, children, label} = props;
    return(
        <a class="nav-link" href={href}>
            <div class="sb-nav-link-icon">{children}</div>
                {label}
        </a>
    );
}