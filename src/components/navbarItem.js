import React from 'react'

function NavbarItem( {render, ...props}){ //props são os parametros
    if(render){
        return(
            <li className="nav-item">
                <a onClick={props.onClick} className="nav-link" href={props.href}>{props.label}</a>
            </li>
        )
    }else{
        return false;
    }
}

export default NavbarItem