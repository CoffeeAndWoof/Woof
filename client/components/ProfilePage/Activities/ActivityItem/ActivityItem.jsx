import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '...../StateProvider';


const ActivityItem = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
    </div>
  );
}

export default ActivityItem;