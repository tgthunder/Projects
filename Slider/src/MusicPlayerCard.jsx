import React from 'react'
import Slider from './Slider'

function MusicPlayerCard() {
  return (
    <>
      {/* Heading Section */}
      <div className="bg-red-600 text-3xl text-white p-3 rounded-lg text-center">
        MusicPlayerCard
      </div>

      {/* Music Player Card */}
      <div className="bg-gray-800 max-w-xl mx-auto flex flex-col rounded-lg overflow-hidden m-8 py-2 px-2">



        <div className=" flex-1 flex w-full bg-yellow-400 rounded-2xl overflow-hidden">
          {/* Image Section */}
          <div className="flex-1 bg-white p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Butta_Bomma.jpg/220px-Butta_Bomma.jpg"
              alt="Allu Arjun Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>


          {/* Text Section */}
          <div className="flex-1 bg-green-500 text-white p-4 items-center justify-center">
            <p className='text-center text-gray-950'>
              <b> Song Name: Butta Bomma</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius fugiat deserunt sunt, soluta qui maiores earum dignissimos nam modi. Dolor est maiores eligendi deleniti libero sunt, laborum labore tenetur?
            </p>
          </div>
        </div>    

        <Slider/>
      </div>
    </>
  )
}

export default MusicPlayerCard