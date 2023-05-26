import React from "react";
import MainLayout from "../../../layout/MainLayout";
import { CopyBlock, dracula } from "react-code-blocks";
import './BinarySearch.css'
import Visualizer from "../../../components/Visualizer/Visualizer";



const AllAlgorithms = () => {
const codeExample = 
 `# Python 3 program for recursive binary search.
# Returns index of x in arr if present, else -1
def binary_search(arr, low, high, x):
  
# Check base case
      if high >= low:
        mid = (high + low) // 2
         # If element is present at the middle itself
        if arr[mid] == x:
          return mid
        # If element is smaller than mid, then it can only
        # be present in left subarray
        elif arr[mid] > x:
         return binary_search(arr, low, mid - 1, x)
        # Else the element can only be present in right subarray
        else:
         return binary_search(arr, mid + 1, high, x)

      else:
        # Element is not present in the array
        return -1
   
# Test array
arr = [ 2, 3, 4, 10, 40 ]
x = 10

# Function call
result = binary_search(arr, 0, len(arr)-1, x)
   
if result != -1:
  print("Element is present at index", str(result))
else:
  print("Element is not present in array")
`

  return (
    <MainLayout>
      <div className="contentDiv"> <h2 className="mainHeading" >Binary Search Algorithm</h2> <div>

      <div className = "section1"> 
      <div className="introduction">
      <h4>Introduction!</h4>

      <p>
        The binary Search algorithm is an algorithm which im sure you might have heard more than once if you have took up a computer science course.
        even though this is one of the most studied algorithms it still might be confusing for alot of people to understand its importance in programming.
         Therefore the objective of this page is to make sure you understand the significance of this algorithm and the difference between it and similar algorithms. 
      </p>
      </div>

      <div className="basicWorking">
      <h4>Basic working principle</h4>
      <p>The basic working principle of the binary search algorithm can be summarized as follows:</p>
      <ol>
        <li className="listItem"><b>Start with a sorted array:</b> Binary search requires the input array to be sorted in ascending or descending order.</li>
        <li className="listItem"><b>Find the midpoint:</b> Calculate the index of the midpoint by taking the average of the start and end pointers. Retrieve the value at the midpoint index.</li>
        <li className="listItem"><b>Compare the target value:</b> Compare the target value that you want to find with the value at the midpoint index. If they are equal, the search is successful, and the index of the target value is returned. If the target value is less than the midpoint value, adjust the end pointer to be one position before the midpoint. If the target value is greater than the midpoint value, adjust the start pointer to be one position after the midpoint.</li>
        <li className="listItem"><b>Repeat the process:</b> Continue the search by recalculating the midpoint based on the updated start and end pointers. Repeat the comparison step until the target value is found or the search range is narrowed down to an empty range  
         (start {">"} end), indicating that the target value does not exist in the array.</li>
      </ol>
      </div>

      <div className="gifImage">
        <img src="https://d18l82el6cdm1i.cloudfront.net/uploads/bePceUMnSG-binary_search_gif.gif" alt="working of binary search"  />
      </div>

      </div>

      <div className="section2">
      <div className="codeBlock">
        <h4>python code</h4>
        <CopyBlock
         text={codeExample}
         language={"python"}
         showLineNumbers={true}
         startingLineNumber={1}
         theme={dracula}
       />
      </div>

      <div className="codeExplaination">
        <h4>Code Explaination</h4>
        <p>The provided code is an implementation of the binary search algorithm in Python. Here's a breakdown of how the code works:</p>
        <ul>
          <li className="listItem"><b>Step 1:</b> The binary_search function takes four parameters: the input array 'arr', the lower index 'low', the higher index 'high', and the target value 'x'. </li>
          <li className="listItem"><b>Step 2:</b> The function starts by checking the base case, which is when the higher index is greater than or equal to the lower index.
</li><b>
      </b>    <li className="listItem"><b>Step 3:</b>Inside the base case, the function calculates the middle index 'mid' as the average of the higher and lower indices using integer division (//) to ensure an integer result.</li>
          <li className="listItem"><b>Step 4:</b> If the element at the middle index 'arr[mid]' is equal to the target value 'x', the function returns the middle index as it has found the target.</li>
          <li className="listItem"><b>Step 5:</b> If the element at the middle index is greater than the target value, the function recursively calls itself with the lower index 'low' and the middle index minus one (mid - 1) to search in the left subarray.</li>
          <li className="listItem"><b>Step 6:</b> If the element at the middle index is smaller than the target value, the function recursively calls itself with the middle index plus one (mid + 1) and the higher index 'high' to search in the right subarray.
</li><b>
      </b>    <li className="listItem"><b>Step 7:</b> If none of the above conditions are met and the base case is not satisfied, the function returns -1 to indicate that the target value was not found in the array.</li>
          <li className="listItem"><b>Step 8:</b> In the main part of the code, an example test array 'arr' is defined, along with the target value 'x' (10 in this case).</li>
          <li className="listItem"><b>Step 9:</b> The binary_search function is called with the initial lower index 0, the initial higher index len(arr)-1 (which is the last index of the array), and the target value 'x'.</li>
          <li className="listItem"><b>Step 10</b>: The result of the binary search is stored in the variable 'result'.</li>
          <li className="listItem"><b>Step 11</b> the code checks if the result is not equal to -1. If it's not, it prints the message "Element is present at index" followed by the result index. Otherwise, it prints the message "Element is not present in the array."</li>
        </ul>
      </div>

      </div>

      <h4 className="exampleHeading">How you have used Binary Search without realising it!</h4>  

      <div className="section3">

      
      <div className="section3Example">
      
      <p>Unknowingly almost all of us have used this searching technique in one context or another, <b>Surprised?.</b> This is popularly used example can show you how</p>
      <p>Imagine you have to look up The word "Elephant" in a dictionary, instead of going sequentially from A, This is how you do it</p>
      <ul>
        <li className="listItem">We open the dictionary in the middle and find a word, let's say "elevator." Since "elephant" comes after "elevator" alphabetically, we know it must be located in the second half of the book.</li>
        <li className="listItem">We focus on the second half of the dictionary and find the middle of that section. Let's say the word is "kangaroo." Since "elephant" comes before "kangaroo," we now know it must be in the first half of the remaining section.</li>
        <li className="listItem">We repeat the process, focusing on the first half of the remaining section. We find the middle word, let's say "elephant." Since it matches our target word exactly, we have found "elephant" in the dictionary.</li>
      </ul>
      <p>This is how you might have used binary search without even knowing it.</p>
      </div>


      <div className="section3Image">
      <img src="https://images.pexels.com/photos/4567481/pexels-photo-4567481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A dictionary" height="350px"  width="600px"/>
      </div>
      </div>



      <h4 className="realLife"> Real life Application in Software! </h4>

      <p>
      Consider a business that maintains a customer database with unique identification numbers assigned to each customer. Let's say there are 20 customers in total, and the business needs to quickly find a customer's information based on their ID number.

By implementing a binary search algorithm, the business can efficiently locate the desired customer's ID. Binary search takes advantage of the sorted nature of the customer database, allowing for faster retrieval of information.

Using binary search, the business can begin the search by examining the middle ID number. If it matches the desired ID, the search concludes successfully. Otherwise, it determines whether the desired ID falls in the lower or upper half of the range and repeats the process with the corresponding half. This halving process continues until the desired ID is found or it is determined that the customer does not exist in the database.

In this specific use case with 20 customers, binary search would require a maximum of five comparisons to locate the desired customer's ID, even in the worst-case scenario. This is significantly faster than a linear search that would require checking each customer's ID one by one.

By utilizing binary search, the business can efficiently handle customer inquiries and quickly retrieve their information based on their ID number. This enhances the customer service experience, reduces search time, and improves the overall operational efficiency of the business.
      </p>

      <h5> Example</h5>

      <Visualizer/>


      </div>

      </div>
    </MainLayout>
  );
};
export default AllAlgorithms;

