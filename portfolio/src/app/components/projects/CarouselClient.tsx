"use client";

import Image from "next/image";
import React, {useId} from "react";

interface CarouselClientProps {
    id?: string;
    images: string[];
    alt?: string;
}

export const CarouselClient: React.FC<CarouselClientProps> = ({id, images, alt}) => {
    const autoID = useId().replace(/[:]/g, "");
    const carouselId = id ?? `carousel-${autoID}`;

    if(!images || images.length === 0) {
        return (
            <div className="ratio ratio-16x9 d-flex align-items-center justify-content-center bg-dark-subtle rounded">
                <span className="text-muted">No Images Available</span>
            </div>
        );
    }

    return (
        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
            {/*Indicators*/}
            <div className="carousel-indicators">
                {images.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide-to={idx}
                            className={idx === 0 ? "active" : ""}
                            aria-current={idx === 0 ? "true" : undefined}
                            aria-label={`Slide ${idx+1}`}
                        />
                ))}
            </div>

            {/*Slides*/}
            <div className="carousel-inner rounded overflow-hidden">
                {images.map((src, idx) => (
                    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={src}>
                        <Image
                            src={src}
                            alt={alt ?? "Project Image"}
                            className="d-block w-100"
                            width={1200}
                            height={400}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            priority={idx === 0}
                        />
                    </div>
                ))}
            </div>

           
        </div>
    );
}