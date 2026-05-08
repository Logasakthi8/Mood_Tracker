import {useState } from 'react';

function App() {
      const [mood,setMood]= useState("");
      const [note,setNote]=useState("");
      const [moods,setMoods]=useState([]);

      const addMood = ()=>{
          if(mood!=="" && note!==""){
              const newMood = {mood,note};
          

          setMoods([...moods,{mood,note}]);

                 setMood("");
                 setNote("");
      }
};

      return (
          <div style={{
              textAlign:'center',  
              marginTop:'50px',
              fontFamily:'Arial, sans-serif',
              backgroundColor:'#f0f0f0',
          }}>
              <h1>Daily Mood Tractor</h1><h3>Select your mood for the day:</h3>
              <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="">--Select Mood--</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Anxious">Anxious</option>
                    <option value="Excited">Excited</option>
             </select>

             <br />
             <br/>

               <h3>Write a note about your day:</h3>
               <textarea rows="4" cols="50" value={note} onChange={(e) => setNote(e.target.value)}></textarea>

                     <br />
                     <br />

                     <button onClick={addMood}>Save Mood </button>
                     <h2>Your Mood and Note:</h2>
                     {moods.length===0?(
                            <p>No moods recorded yet.</p>
                     ):(
                            <ul>
                                   {moods.map((item,index)=>(
                                          <li key={index}>
                                                 <strong>Mood:</strong> {item.mood} <br />
                                                 <strong>Note:</strong> {item.note}
                                          </li>
                                   ))}
                            </ul>
                                 
                     )}

              </div>
      );
}

export default App;