'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import BookCard from './BookCard';

export default function BooksSlider({ books }) {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView="auto"
            spaceBetween={6}
            navigation
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="mt-2 w-full"
        >
            {books.map((book) => (
                <SwiperSlide key={book.id} className="w-auto!">
                    <BookCard
                        title={book.title}
                        author={book.author}
                        image={book.image}
                        price={book.price}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
