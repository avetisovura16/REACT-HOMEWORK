import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';




const root = ReactDOM.createRoot(document.getElementById('root'));






function Test() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(response => response.json())               
    .then(data => setPosts(data));                   
}, []);

return (
  <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
    <h1>my posts</h1>
    <ul>
      
      {posts.map(post => (
        <li key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          
 <button onClick={() => {
  
  setPosts(posts.filter(p => p.id !== post.id));
}}>
  delete
</button>

        </li>
      ))}


    </ul>
  </div>
);
}

root.render(
  <React.StrictMode>
<Test />
  </React.StrictMode>
);



