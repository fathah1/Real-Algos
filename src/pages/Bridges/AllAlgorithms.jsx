import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";


const AllAlgorithms = () => {
  return (
    <MainLayout>
      <h2 className="bridgeHeading" >Algorithms to learn about!</h2>
      <ul className="list-group m-auto">
        <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
          <Link to="/algorithms/BinarySearch">
          Binary Search
          </Link>
        </li>
        <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
          <Link to="/algorithms/BFS">
          Breadth First Search
          </Link>
        </li>
        <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
          <Link to="/algorithms/DFS">
          Depth First Search
          </Link>
        </li>
        <li key={1} className="list-group-item list-group-item-action w-50 mx-auto mt-3">
          <Link to="/algorithms/MergeSort">
          Merge Sort
          </Link>
        </li>

    </ul>
    </MainLayout>
  );
};

export default AllAlgorithms;
