import { useState, useEffect, useId } from 'react'

export default function Meme() {

    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    useEffect(() => {
        console.log('useEffect ran')
        // Get all the memes from the API   
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data))
    }, [])

    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomIndex].url
        // Update the state with the new random image
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        console.log(name, value)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }



    // useEffect(() => {
    //     alert(`Meme: ${meme.randomImage}`)
    // });

    // The useEffect hook handles side effects - side effects are actions that happen outside of the normal flow of the application in react

    const id = useId()

    return (
        <main>
            <div className="mt-2 mb-2">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* Top text */}
                    <div className="sm:col-span-3">
                        <label htmlFor={`${id}-top-text`} className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                            Top text
                        </label>
                        <div className="mt-2">
                            <input
                                id={`${id}-toptText`}
                                name="topText"
                                type="text"
                                placeholder="Top text"
                                onChange={handleChange}
                                className="ps-2 lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Bottom text */}
                    <div className="sm:col-span-3">
                        <label htmlFor={`${id}-bottom-text`} className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                            Bottom text
                        </label>
                        <div className="mt-2">
                            <input
                                id={`${id}-bottom-text`}
                                name="bottomText"
                                type="text"
                                placeholder="Bottom text"
                                onChange={handleChange}
                                className="ps-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="button"
                        onClick={getMemeImage}
                        className="flex w-full py-1.5 rounded-lg border border-transparent bg-gradient-to-r from-violet-500 to-purple-500 text-white justify-center font-medium">
                        Get a new meme image
                    </button>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='relative inline-block'>
                    <img src={meme.randomImage} alt="" className='max-w-full h-auto' />
                    <h2 className='absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold uppercase text-center w-full'>
                        {meme.topText}
                    </h2>
                    <h2 className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold uppercase text-center w-full drop-shadow-md'>
                        {meme.bottomText}
                    </h2>
                </div>
            </div>
        </main >

    )
}