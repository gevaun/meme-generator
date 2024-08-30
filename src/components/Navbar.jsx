import trollFace from '../assets/troll-face.png';

export default function Navbar() {
    return (
        <nav className='w-full h-24 p-2 flex items-center bg-gradient-to-r from-violet-500 to-purple-500'>
            <div className='w-full flex'>
                <div className='w-1/2 flex space-x-2'>
                    <img src={trollFace} alt="Troll face" className='w-12' />
                    <div className='text-white text-3xl font-bold'>Meme Generator</div>
                </div>
                <div className='w-1/2 flex justify-end items-center text-white font-medium'>React Course - Project 3</div>
            </div>
        </nav>
    )
}