import React from "react";

function BasicMenu(props) {
    const {menu, fref, scrollTo} = props;
    return <header className="basicMenu" ref = {fref}>
        <ul className="menu">
            {menu.map((item, id) => <li className={item.className} key={id} >
                <a onClick={() => props.scrollto(id)} className={item.className}>{item.name}</a></li>)}
        </ul>
    </header>

}

export default BasicMenu