import { useCallback, useEffect, useState } from "react";
import Table from "./components/Table.js";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };

  const showCount = useCallback(() => {
    console.log(count);
  }, [count]);

  function myFunction(e) {
    const searchKey = e.target.value;
    setSearchKey(searchKey.toLowerCase());
  }

  const columns = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "EMAIL" },
    { field: "website", headerName: "WEBSITE" },
  ];

  const columns2 = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "TITLE" },
  ];

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {})
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((error) => {
        // console.log(error)
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {})
      .then((res) => {
        const data = res.data;
        setPostData(data);
      })
      .catch((error) => {
        // console.log(error)
      });
  }, [setData, setPostData]);

  console.log(count);

  return (
    <>
      {/* <button onClick={increment}>Incr</button>
      <button onClick={showCount}>Show</button>
      <p>/learn react/</p> */}
      <div>
        <input
          type="text"
          id="myInput"
          onChange={myFunction}
          placeholder="Search By Name"
          title="Type in a name"
        />
      </div>
      <Table data={data} columns={columns} searchKey={searchKey} />

      {/* <div>table2</div>
    <Table
    data={postData}
    columns={columns2}
    // searchKey={searchKey}
    /> */}
    </>
  );
}

export default App;
