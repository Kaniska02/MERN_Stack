// // test2
// import React, { useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   const handleDropdownChange = (e) => {
//     const selectedValue = e.target.value;

//     if (selectedValue) {
//       fetch(`https://reqres.in/api/users?page=${selectedValue}`)
//         .then(response => response.json())
//         .then(data => {
//           setUsers(data.data);
//           console.log('Fetched users:', data.data);
//         })
//         .catch(error => console.error('Error fetching users:', error));
//     }
//   };

//   return (
//     <div>
//       <h1>User List Page</h1>
//       <select onChange={handleDropdownChange}>
//         <option value="">Select a page</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//       </select>

//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>
//               {user.first_name} {user.last_name} - {user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserList;


import { useState } from 'react';

export default function Register1() {
  const [userList, setUserList] = useState([]);

  async function getData() {
    try {
      let res = await fetch("https://reqres.in/api/users?page=1"); 
      let json = await res.json();
      setUserList(json.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      {userList.map((obj,index) => (
        <div>
          <h1>{obj.first_name}</h1>
        </div>
      ))}
    </div>
  );
}