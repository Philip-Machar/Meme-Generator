import memeData from "../memeData";
import { useState } from "react";

const Card = () => {
  
  const [allImages, setAllImages] = useState(memeData)

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "/images/meme.png"
  })

  const getMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeData.data.memes.length);
    const randomMeme = allImages.data.memes[randomIndex];
    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          randomImage: randomMeme.url
        }
      )
    })
    console.log(randomMeme)
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
                    <input className="w-full h-8 rounded-md outline-none border border-gray-300 pl-3 pr-3" id="topText" type="text" name="topText" />
                </div>
                <div className="grid gap-2 w-full">
                    <label htmlFor="bottomText">Bottom text</label>
                    <input className="w-full h-8 rounded-md outline-none border border-gray-300 pl-3 pr-3" id="bottomText" type="text" name="bottomText" />
                </div>
            </div>
            <button onClick={getMeme} className="bg-gradient-to-r from-[#672280] to-[#A626D3] p-2 w-full rounded-md text-white mb-8">Get a new meme image <img src="" alt="" /> </button>
        </div>
        <img className="w-full mb-10 object-cover" src={meme.randomImage} alt="meme image" />
      </div>
    </div>
  )
}

export default Card
