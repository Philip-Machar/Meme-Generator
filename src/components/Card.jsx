import { useState, useEffect } from "react";

const Card = () => {
  
  const [allMemes, setAllImages] = useState([])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "/images/meme.png"
  })

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(respnose => respnose.json())
      .then(data => setAllImages(data.data.memes))
      .catch(error => console.error("Error", error))
  }, [])

  const getMeme = () => {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomIndex];
    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          randomImage: randomMeme.url
        }
      )
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          [name]: value
        }
      )
    })
  }

  return (
    <div className="max-w-[550px] max-h-full bg-white shadow-xl">
      <div className="flex items-center bg-gradient-to-r from-[#672280] to-[#A626D3] px-8 py-6 gap-2">
        <img className="w-[40px]" src="/images/trollFace.png" alt="troll face image" />
        <div className="text-2xl text-white font-bold">Meme Generator</div>
      </div>
      <div className="mr-8 ml-8">
        <div>
            <div className="flex gap-8 mt-8 mb-5">
                <div className="grid gap-2 w-full">
                    <label htmlFor="topText">Top text</label>
                    <input 
                      className="w-full h-8 rounded-md outline-none border border-gray-300 pl-3 pr-3" 
                      id="topText" 
                      type="text" 
                      name="topText" 
                      value={meme.topText}
                      onChange={handleChange}
                    />
                </div>
                <div className="grid gap-2 w-full">
                    <label htmlFor="bottomText">Bottom text</label>
                    <input 
                      className="w-full h-8 rounded-md outline-none border border-gray-300 pl-3 pr-3" 
                      id="bottomText" 
                      type="text" 
                      name="bottomText" 
                      value={meme.bottomText}
                      onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={getMeme} className="bg-gradient-to-r from-[#672280] to-[#A626D3] p-2 w-full rounded-md text-white mb-8">Get a new meme image <img src="" alt="" /> </button>
        </div>
        <div className="relative">
          <img className="w-full h-full mb-10 object-cover py-4" src={meme.randomImage} alt="meme image"></img>
          <h2 className="absolute top-4 text-3xl">{meme.topText}</h2>
          <h2 className="absolute bottom-4 text-3xl">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
