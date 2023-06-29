import styles from "styles/Navigation.module.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
