import '../index.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <nav className='navigation'>
        <img height="40px" width="auto" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt='HeaderImage'/> 
        <ul>
          <li>
            <Link 
              key={"Home"}
              to={"/"}>
                <p className='setcolor'>Home</p>
            </Link>
          </li>
          {/* <li>
            <Link 
              key={"Bookmark"}
              to={"/Bookmark"}>
                <p className='setcolor'>Bookmark</p>
            </Link>
          </li> */}
        </ul>
      </nav>
  )
};

export default Header;