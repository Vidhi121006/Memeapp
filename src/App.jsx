import React, { useState, useEffect } from 'react'

function App() {  //using useState to manage state of enter data
const [meme, setMeme] = useState([])     //to pass initial value
const [randomMeme, setrandomMeme] = useState(null)      //to get random meme image and display it
const [topText, setTopText] = useState('')          //to get data from first input
const [bottomText, setBottomText] = useState('')    //to get data from second input

useEffect(() => {   //to get data from API
  fetch('https://api.imgflip.com/get_memes')     //to fetch api 
    .then((res) => res.json())        //convert response to json
    .then(data=>setMeme(data.data.memes)) 
    }, [])

    //console.log(meme) -> to check if data is fetched or not

    const getRandomMeme = () => {   //to get random meme
      const randomIndex = Math.floor(Math.random() * meme.length)  //math.random() to get random number (index) from 0 to length of meme
      //console.log(meme[randomIndex])  ->to check if random index(id) is generated or not
      setrandomMeme(meme[randomIndex])  //to set random meme
    }
    //console.log(randomMeme)  ->to check if random meme is generated or not
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-4">Meme Generator</h1>
      <div className="mb-5">
        <input type="text"
          placeholder="Top text"
          value={topText}
          className="border p-2 rounded mr-2"
          onChange={(e) => setTopText(e.target.value)} />
        <input type="text"
          placeholder="Bottom text"
          value={bottomText}
          className="border p-2 rounded mr-2"
          onChange={(e) => setBottomText(e.target.value)}
          />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={getRandomMeme}>Get a new meme image</button>
      </div>

      {randomMeme && (

        <div className="relative items-center">
          <img src={randomMeme.url} alt="meme" className="max-w-full h-auto rounded-lg mt-4" />
          <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold">{topText}</h2>
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold">{bottomText}</h2>
          </div>
      )}
    </div>

  )
}

export default App
