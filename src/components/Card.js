import React from "react";
import Card from "react-bootstrap/Card";
import data from "../data.json";

function MyCards() {
  return (
    <div>
      {data.map((item, index) => (
        <Card key={index}>
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            {item.imgUrl && <img src={item.imgUrl} alt={item.title} />}
            <Card.Text>{item.time}</Card.Text>
            <Card.Text>{item.age}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MyCards;
// import React, { useEffect, useState } from "react";
// // eslint-disable-next-line no-unused-vars
// import data from "../data.json";

// function MyComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("data.json");
//       const jsonData = await response.json();
//       setData(jsonData);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2>{item.title}</h2>
//           {item.subtitle && <h3>{item.subtitle}</h3>}
//           {item.description && <p>{item.description}</p>}
//           {item.image && <img src={item.image} alt={item.title} />}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyComponent;
