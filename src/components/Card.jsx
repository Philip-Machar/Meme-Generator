const Card = () => {
  return (
    <div className="w-[550px] bg-white shadow-xl">
      <div className="flex items-center bg-gradient-to-r from-[#672280] to-[#A626D3] px-8 py-6 gap-2">
        <img className="w-[40px]" src="/images/trollFace.png" alt="troll face image" />
        <div className="text-2xl text-white font-bold">Meme Generator</div>
      </div>
      <div className="mr-8 ml-8">
        <form action="">
            <div className="flex gap-8 mt-8 mb-5">
                <div className="grid gap-2 w-full">
                    <label htmlFor="topText">Top text</label>
                    <input className="w-full h-8 rounded-md border border-gray-300" id="topText" type="text" name="topText" />
                </div>
                <div className="grid gap-2 w-full">
                    <label htmlFor="bottomText">Bottom text</label>
                    <input className="w-full h-8 rounded-md border border-gray-300" id="bottomText" type="text" name="bottomText" />
                </div>
            </div>
            <button className="bg-gradient-to-r from-[#672280] to-[#A626D3] p-2 w-full rounded-md text-white mb-8" type="submit">Get a new meme image <img src="" alt="" /> </button>
        </form>
        <img className="w-full mb-10" src="/images/meme.png" alt="meme image" />
      </div>
    </div>
  )
}

export default Card
