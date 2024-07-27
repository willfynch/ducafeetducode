import { ReactNode } from "react";
import style from "./footer.module.css";
import Link from "next/link";
import { GiCoffeeBeans } from "react-icons/gi";

function Footer(): ReactNode {
  return (
    <footer className={style.footer}>
      <div className={style.logo_text_part}>
        <Link className={style.brand} href={"/"}>
          <GiCoffeeBeans />
          <span className={style.brand_name}>Du Café et du Code</span>
        </Link>
        <p>Fait avec ❤️ par <a href="https://ducafeetducode.com">Du Café et du Code</a>, studio de création de sites internet pour TPE, PME et professions libérales.</p>
      </div>
      <div className={style.legals}>
        <div>
          <p>© 2024 Du Café et du Code - Tous droits réservés</p>
        </div>
        <nav>
            <Link href="/mentions-legals">Mentions légales</Link>
            <a href="">Prendre rendez-vous</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
