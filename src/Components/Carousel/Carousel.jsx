import React, { useState } from "react";

const CarouselItem = ({ image, alt }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={image} alt={alt} />
        </div>
    )
}

export const Carousel = ({ thing }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = thing.pictures.length - 1;
        } else if (newIndex >= thing.pictures.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div className="inner"
            style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {thing.pictures.map((image, index) => {
                    return <CarouselItem key={`${thing.id}-${index}`} image={image} />
                })}
            </div>

            {thing.pictures.length > 1 && (
                <>
                    <div className="carousel-buttons">
                        <button className="button-arrow" onClick={() => updateIndex(activeIndex - 1)}>
                            <span className="material-symbols-outlined">
                                arrow_back_ios_new
                            </span>
                        </button>

                        <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}>
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </button>
                    </div>

                    <div className="image-indicator">
                        {`${activeIndex + 1}/${thing.pictures.length}`}
                    </div>
                </>
            )}
        </div>
    )
}