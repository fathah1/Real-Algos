import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Link  } from "react-router-dom";

const AllDS = () => {
  return (
    <MainLayout>
    <h2 className="bridgeHeading" >Data Structures to learn about!</h2>
    <ul className="list-group m-auto">
      <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
        <Link to="/datastructures/BinarySearch">
        Arrays
        </Link>
      </li>
      <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
        <Link to="/datastructures/BFS">
        Stacks
        </Link>
      </li>
      <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
        <Link to="/datastructures/DFS">
        Queues
        </Link>
      </li>
      <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
        <Link to="/datastructures/MergeSort">
        Linked Lists
        </Link>
      </li>
  </ul>
  </MainLayout>
  );
};

export default AllDS;
