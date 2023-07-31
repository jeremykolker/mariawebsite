import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>DJMARIALINAHAIR</h1>
      <ul>  
     <li> <Link to="about">Click to view our about page</Link></li>
     <li><Link to="contact">Click to view our contact page</Link></li>
     <li><Link to="services">Click to view our services page</Link></li>
      </ul>
    </div>
  );
}

export default Home;