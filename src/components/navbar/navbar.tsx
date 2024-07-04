'use client'
import { ReactNode, useEffect, useRef, useState } from "react";
import style from "./navbar.module.css"
import { NavItemModel } from "@/models/navitem.model";
import { motion, useScroll } from "framer-motion";


function Navbar(): ReactNode {
    const [scrollColor, setScrollColor] = useState('var(--white-primary)');
    
    const ref = useRef<Window>(window);




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
        <motion.div style={{color:scrollColor}} className={style.nav__container}>
            <p className={style.brand}>Du Café et du Code</p>
            <nav>
                {navItems.map((item,index)=>{
                    return(
                        <a key={index} href={`#${item.path}`}>{item.label}</a>
                    )
                })}
                <button className="btn-primary">Prendre rendez-vous</button>
            </nav>
            
            
        </motion.div>
     );
}

export default Navbar;