

export const runtime = "nodejs";
import { getProjectImages } from "@/lib/GetProjectImages";
import { CarouselClient } from "./CarouselClient";

interface ProjectImageCarouselProps {
    imageDir: string;
    alt?: string;
    id?: string;
    priorityFirstImage?: boolean;
}

export default async function ProjectImageCarousel({imageDir, alt, id, priorityFirstImage = false}: ProjectImageCarouselProps) {
    const images = await getProjectImages(imageDir);
    return <CarouselClient id={id} images={images} alt={alt} priorityFirstImage={priorityFirstImage} />;
}