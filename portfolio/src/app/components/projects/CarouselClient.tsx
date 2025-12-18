"use client";

import Image from "next/image";
import React, { useId, useMemo, useState } from "react";

interface CarouselClientProps {
  id?: string;
  images: string[];
  alt?: string;
  priorityFirstImage?: boolean;
}

export const CarouselClient: React.FC<CarouselClientProps> = ({
  id,
  images,
  alt,
  priorityFirstImage = false,
}) => {
  const autoID = useId().replace(/[:]/g, "");
  const carouselId = id ?? `carousel-${autoID}`;
  const modalId = `${carouselId}-modal`;

  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  const safeImages = useMemo(
    () => (images ?? []).map((raw) => encodeURI(raw)),
    [images]
  );

  if (!safeImages.length) {
    return (
      <div className="ratio ratio-16x9 d-flex align-items-center justify-content-center bg-dark-subtle rounded">
        <span className="text-muted">No Images Available</span>
      </div>
    );
  }

  const openModal = (src: string) => {
    setActiveSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id={carouselId} className="carousel slide">
        {/* Indicators */}
        <div className="carousel-indicators">
          {safeImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner rounded overflow-hidden">
          {safeImages.map((src, idx) => (
            <div
              key={`${carouselId}-${idx}`}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              {/* Clickable image */}
              <button
                type="button"
                className="p-0 border-0 bg-transparent w-100 position-relative"
                onClick={() => openModal(src)}
                aria-label="Open image fullscreen"
                style={{ cursor: "zoom-in" }}
              >
                {/* Optional “expand” hint */}
                <span
                  className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    color: "white",
                    fontSize: "0.8rem",
                    zIndex: 2,
                  }}
                >
                  Tap to expand
                </span>
                <Image
                  src={src}
                  alt={alt ?? "Project Image"}
                  className="d-block w-100"
                  width={1200}
                  height={400}
                  priority={priorityFirstImage && idx === 0}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </button>
            
            </div>
          ))}
        </div>

        {/* Controls (optional but nice on mobile) */}
        {safeImages.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
              aria-label="Previous"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
              aria-label="Next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Simple modal overlay (no Bootstrap JS required) */}
      {isOpen && activeSrc && (
        <div
          id={modalId}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 1050 }}
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="position-relative"
            style={{
              width: "min(1100px, 95vw)",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn btn-outline-light position-absolute top-0 end-0 m-2"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <div
              className="rounded overflow-hidden"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <Image
                src={activeSrc}
                alt={alt ?? "Project Image (expanded)"}
                width={1600}
                height={900}
                className="w-100"
                sizes="95vw"
                style={{ height: "auto", maxHeight: "90vh", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
