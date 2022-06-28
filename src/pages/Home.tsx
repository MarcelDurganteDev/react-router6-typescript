import React from 'react';
import { Link, useNavigate } from "react-router-dom";

interface IHomePageProps {
  
}
 
const IHomePage: React.FC<IHomePageProps> = props => {

  const navigate = useNavigate();

  return ( 
    <div>
      <p>This is HOME PAGE</p>
      <Link to="/about">Go to ABOUT PAGE</Link>
      <button onClick={()=> navigate('/layout/77')}>Go to about with a number and layout</button>
    </div>
   );
}
 
export default IHomePage;