import { useState } from 'react'
import memeData from '../data/memesData'

export default function Meme() {

    const [memeImg, setMemeImg] = useState('')
    const [allMemeImages] = useState('')

    function getMemeImg() {
        const memesArray = memeData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomIndex].url
        setMemeImg(url)
        console.log(url)
        return url
    }



    function handleClick() {
        console.log("Button clicked")
    }

    function handleMouseOver() {
        console.log("Mouse over")
    }

    const thinsArray = ["thing 1", "thing 2", "thing 3"]
    const [things, setThings] = useState(thinsArray)

    function addThing() {
        console.log("Thing added")
        const newThing = `thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])
        console.log(things)
    }

    const thingsElement = things.map((thing, index) => {
        return (
            <p key={index}>{thing}</p>
        )
    })

    return (
        <main>
            <div className="mt-2 mb-2">
                <form action="">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Top text */}
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Top text
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    placeholder="Top text"
                                    autoComplete="given-name"
                                    className="ps-2 lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Bottom text */}
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Bottom text
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    placeholder="Bottom text"
                                    autoComplete="family-name"
                                    className="ps-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="button" onClick={getMemeImg} className="flex w-full py-1.5 rounded-lg border border-transparent bg-gradient-to-r from-violet-500 to-purple-500 text-white justify-center font-medium">Get a new meme image</button>
                    </div>
                    {/* <div className="mt-6"> 
                            <button type="button" onMouseOver={handleMouseOver} className="flex w-full py-1.5 rounded-lg border border-transparent bg-gradient-to-r from-violet-500 to-purple-500 text-white justify-center font-medium">Get a new meme image</button>
                        </div> */}
                </form>
            </div>
            <div className='flex justify-center'>
                <img src={memeImg} alt="" className='w-108'/>
            </div>

            {/* Working with buttons */}

            {/* <button onClick={addThing} className='bg-green-800 p-2 rounded-md text-white'>Add thing</button>
                {thingsElement} */}
        </main >

    )
}