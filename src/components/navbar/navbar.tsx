import { ReactNode } from "react";
import style from "./navbar.module.css"
import { NavItemModel } from "@/models/navitem.model";


function Navbar(): ReactNode {

    const navItems: NavItemModel[] = [
        {
            path: 'methode',
            label: 'Méthode'
        },
        {
            path: 'tarifs',
            label: 'Tarifs'
        },
        {
            path: 'FAQ',
            label: 'F.A.Q'
        },
    ]

    return ( 
        <div className={style.nav__container}>
            <nav>
                {navItems.map((item,index)=>{
                    return(
                        <a key={index} href={`#${item.path}`}>{item.label}</a>
                    )
                })}
            </nav>
            <p className={style.brand}> <img src="/images/coffe_icon.webp" alt="" /> Du Café et du Code</p>
            <button className="btn-primary">Prendre RDV</button>
        </div>
     );
}

export default Navbar;