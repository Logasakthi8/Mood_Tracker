import {useState } from 'react';

function App() {
   const [water,setWater] = useState("");
   const [records,setRecords] = useState([]);

   const addWater = () =>{
       if(water!==""){
              setRecords([...records, Number(water)]);
              setWater("");
       }
       else{
              alert("please Enter the input")
       }
   }
 const total=records.reduce((acc, curr) => acc + curr, 0);

   const deleteRecord = (index) => {  
       setRecords(records.filter((_, i) => i !== index));
   }
   return(
       <div>
              <h1>Daily Water Tracker</h1>

              <input type="number" value={water} onChange={(e) => setWater(e.target.value)} placeholder="Enter water intake in liters" />
              <button onClick={addWater }>Add Record</button>
              <hr />
              <h2>Water Intake Records</h2>

              {records.length===0?(
                     <p>No records found. </p>
              ):(
                     <ul>
                            {records.map((record,index) => (
                                   <li key={index}>{record} Glasses
                                   <button onClick={() => deleteRecord(index)}>Delete</button>
                                   </li>
                            ))}
                     </ul>
              )

              }


           <h2>Total :{total} Glasses</h2>
       </div>
   )
}

export default App;
