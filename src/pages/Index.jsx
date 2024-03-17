import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Index() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://medium-clone-server-production.up.railway.app/')
      const data = await response.data
      setData(data)
      console.log(data)
    }

    getData()
  }, [])

  return (
    <div>
      {data && data.map(post => (
        <div key={post.id}>
          <h5>{post.author}</h5>
          <p>{post.text}</p>
        </div>
      ))}
    </div>

  )
}

export default Index