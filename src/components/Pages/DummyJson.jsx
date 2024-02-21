import { useState, useEffect } from "react";
import React from "react";

function JsonComponentRendering() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("trigger");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1> UserID {postData.userId}</h1>
          <p> DocID:{postData.id}</p>
          <p> Title :{postData.title}</p>
         {/* <p> Status:{postData.completed}</p> */}
        </div>
      )}
    </div>
  );
}

export default JsonComponentRendering;
