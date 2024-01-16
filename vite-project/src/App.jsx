import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Chatbotbtn from './Components/Chatbotbtn'
import Chatbotview from './Components/Chatbotview'
import './App.css'
 


async function get_message(){

  const apiUrl = 'https://rwncahtbotapi.onrender.com/message';

  const requestBody = [
    {
      "role": "system",
      "content": "You are a helpful assistant. I want you to use this text after the column as context to answer some questions only available within the text. Anything or question asked outside the text provided should be responded with 'you are out of context'  here is the text for context: In PostgreSQL, there is no hard-coded limit to the number of tables you can have within a single database. The number of tables you can create is influenced by various factors, including available system resources such as disk space, memory, and the PostgreSQL configuration settings.  However, it's essential to consider practical limitations and performance implications when dealing with a large number of tables in a database. Each table consumes resources, and the complexity of queries, indexing, and maintenance operations can increase with the number of tables. If you find yourself needing an extremely large number of tables, you might want to reconsider your database schema design or explore partitioning strategies, which can help manage and optimize large datasets. In general, PostgreSQL is known for its ability to handle a substantial number of tables and large databases, but the specific limits will depend on the resources available on your system and the version/configuration of PostgreSQL you are using. Do not give answers more than 2 lines, keep your answers short and concise"
    },
    {
      "role": "system",
      "content": "what is postgreSQL known for?"
    },
    {
      "role": "system",
      "content": "how can I get started with postgreSQL?"
    }
  ];
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
}



function App() {
  var [showcb,setshowcb]=useState(true)
 
  return (
    <>  <div className='body'><iframe className='iframe'
    title="External Content"
    width="100vw"
    height="100vh"
    src="https://rwndynamics.com/"
     allowFullScreen
  ></iframe>


{showcb?<Chatbotbtn click={ ()=>{

  setshowcb(false)
}}/> :
<Chatbotview send={async ()=>{
get_message();

}} cancel={()=>{

  setshowcb(true)
}}/> }
</div>
    </>
  )
}

export default App
