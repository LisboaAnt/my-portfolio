// src/components/PublicationsCarosel.tsx
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import getImagesById from '../GetPublicationsImgs';
import './style.scss'

interface PublicationsCaroselProps {
    id: string;
}

const PublicationsCarosel: React.FC<PublicationsCaroselProps> = ({ id }) => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const images = await getImagesById(id);
                setImages(images);
            } catch (error) {
                console.error('Error loading images:', error);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, [id]);

    if (loading) {
        return <p>Loading images...</p>;
    }

    if (images.length === 0) {
        return <p>No images found for this publication.</p>;
    }

    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default PublicationsCarosel;
