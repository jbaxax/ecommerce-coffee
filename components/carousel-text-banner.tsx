"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío en 24/48 h",
        description: "Como cliente VIP, tus envios en 24/48 horas. Obten mas informacion",
        link: "#!",
    },
    {
        id: 2,
        title: "Consigue hasta un -25% en compras superiores a 40 soles",
        description: "-20% al gastar",
        link: "#!",
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Como cliente, tienes envios y devoluciones gratuitos",
        link: "#!",
    },
    {
        id: 4,
        title: "Comprar novedades",
        description: "Todas las novedades al 50% de descuento",
        link: "#!",
    },

]
const CarouselTextBanner = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500, //ms 2000 = 2s 
                    })
                ]}
            >

                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer ">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>


            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;