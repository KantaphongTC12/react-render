import React from 'react'
import Button from '../components/Button'
import CardList from '../components/CardList'
import Footer from '../components/Footer'
import ErrorMessage from '../components/ErrorMessage'

const Home = () => {
    return (
        <>
            <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: 'url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-shadow-gray-200'>Welcome to the Nigga Store</h2>
                    <p className=' mb-6 text-lg font-semibold'>Browse through our collection of cards and discover amazing designs.</p>
                    <Button nameButton="Explore Cards" />
                </div>
            </section>

            <section className='bg-white py-12'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-3xl font-bold text-gray-950 text-center mb-6'>
                        Explore our collection of cards showcasing various items.
                    </h1>
                    <p className='text-gray-700 text-center mb-8'>
                        Discover beautifully designed cards curated for inspiration and creativity. Browse through the gallery to find designs that spark your imagination.
                    </p>
                    <Button nameButton="Browse Collection" />
                </div>
            </section>



        < Footer/>
        <ErrorMessage/>
        </>
    )
}

export default Home