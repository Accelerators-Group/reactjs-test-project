import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">        

   <Link
        className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none "
        key={"Home"}
        to={"/"}
      >Home</Link><br/>
      <Link
        className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none "
        key={"Bookmark"}
        to={"/bookmark"}
      >Bookmark</Link><br/>

   
  </div>

    
  );
}