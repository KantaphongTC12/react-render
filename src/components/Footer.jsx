import React from 'react'
import Button from './Button' // ปรับ path ถ้าอยู่คนละโฟลเดอร์

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-gray-400 to-gray-950 text-white text-center mt-8'>
            <div className='container mx-auto py-20 px-4'>
                <h2 className='text-purple-50 mb-4 text-3xl font-bold'>About Us</h2>
                <p className='text-gray-200 text-lg'>
                    We are passionate about showcasing beautiful card designs. Our collection is curated to inspire creativity and provide a platform for designers to share their work.
                </p>
                <p className='text-gray-200 text-lg mt-2'>
                    Join us in exploring the world of card designs and discover the artistry behind each creation.
                </p>
                <div className='mt-6'>
                    <Button nameButton="About More" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
