import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">        

      <Link
        className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none "
        key={"Home"}
        to={"/"}
      ><button className="bg-black text-white p-1">Home</button></Link><br/> 
  </div>

    
  );
}