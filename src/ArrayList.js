import React from "react";
import {Table} from 'react-bootstrap'
import ReuseComp from './ReuseComp'

function ArrayList() {
  // const users = ["surya", "sk", "mugesh", "sekar"];

  // NORMAL WAYS OF LOOP

  // users.map((item)=>{
  //     console.log(item);
  // })

  // for(let i=0;i<users.length;i++){
  //     console.warn(users[i]);
  // }

//   const users2 = [
//     { name: "surya", age: 22, email: "surya165078@gmail.com"},
//     { name: "sk", age: 20, email: "sk123@example.ac.in" },
//     { name: "mugesh", age: 20, email: "mugesh@gmail.in" },
//     { name: "seker", age: 19, email: "seker@gmail.com" },
//   ];

//     const users3=[
//         {name: "surya", age: 22, email: "surya165078@gmail.com",
//         address:[
//         {homenum:121,city:'PPM',phone:'8838946997'},
//         {homenum:131,city:'RS',phone:'1234567890'},
//         {homenum:141,city:'CAUVERY',phone:'0987654321'}
//     ]
// },
 
//     { name: "sk", age: 20, email: "sk123@example.ac.in",
//     address:[
//         {homenum:121,city:'PPM',phone:'8838946997'},
//         {homenum:131,city:'RS',phone:'1234567890'},
//         {homenum:141,city:'CAUVERY',phone:'0987654321'}
//     ]
// },
//     { name: "mugesh", age: 20, email: "mugesh@gmail.in",
//     address:[
//         {homenum:121,city:'PPM',phone:'8838946997'},
//         {homenum:131,city:'RS',phone:'1234567890'},
//         {homenum:141,city:'CAUVERY',phone:'0987654321'}
//     ] 
// },
//     { name: "seker", age: 19, email: "seker@gmail.com",
//     address:[
//         {homenum:121,city:'PPM',phone:'8838946997'},
//         {homenum:131,city:'RS',phone:'1234567890'},
//         {homenum:141,city:'CAUVERY',phone:'0987654321'}
//     ] 
// }

//     ];



// Reuse Component with List
const reuse = [
      { name: "surya", age: 22, email: "surya165078@gmail.com"},
      { name: "sk", age: 20, email: "sk123@example.ac.in" },
      { name: "mugesh", age: 20, email: "mugesh@gmail.in" },
      { name: "seker", age: 19, email: "seker@gmail.com" },
    ];
  

  return (
    <div className="App">
      {/* <h3>Array with list</h3>
      {users.map((item) => (
        <li key={item.toString()}>{item}</li>
      ))} */}

      {/* Object array */}
      <h3>Array of objects</h3>
      
      {/* USERS 2 */}

      {/* <Table striped variant='dark'>
        <tbody>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
          {users2.map((item, index) => (
            // <li>{item.name} - {item.age}</li>
            // Conditions also applicable
            // item.age===20?
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
            // :null
          ))}
        </tbody>
      </Table> */}



      {/* USERS3 */}
      {/* <Table striped variant="warning">
          <tbody>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Address</td>
          </tr>

          {users3.map((item,i) => (
                  <tr key={i}>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.email}</td>
                      <td>
                        <Table>
                          <tbody>
                          {item.address.map((item2,i2) => (
                          <tr key={i2}>
                            <td>{item2.homenum}</td>
                            <td>{item2.city}</td>
                            <td>{item2.phone}</td>
                          </tr>
                          ))}
                        </tbody></Table>
                      </td>
                  </tr>
          ))
          }
          </tbody>
      </Table> */}



      {/* Reuse Component with List */}
      <h3>Reuse Component with List</h3>
      {/* <ReuseComp /> */}
      {
        reuse.map((item) => (
          <ReuseComp data={item}/>
        ))
      }

    </div>
  );
}
export default ArrayList;
