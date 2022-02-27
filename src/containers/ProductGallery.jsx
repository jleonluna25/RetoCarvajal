import React from 'react';
import '../styles/ProductGallery.scss';
import GalleryItem from '../components/GalleryItem';

const ProductGallery = () => {
    return (
        <section className="main-container">
            <div className="cards-container">

                <GalleryItem />

                <GalleryItem />
                
                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />

                <GalleryItem />
            </div>
        </section>
    );
}

export default ProductGallery;