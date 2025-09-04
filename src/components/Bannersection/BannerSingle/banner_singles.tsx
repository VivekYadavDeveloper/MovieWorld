import React from 'react'
import Image from 'next/image'
import { Movie } from '@/type/MovieType'


interface BannerSingleProps {
    movie: Movie
}

const BannerSingle: React.FC<BannerSingleProps> = ({ movie }) => {
    console.log(movie.original_language)
    return (
        <>
            <div id="item4" className="carousel-item w-full">
                <Image
                    width={500}
                    height={500}
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" alt={''} />
            </div>
        </>
    )
}

export default BannerSingle