import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
} from "swiper";
import { houseCategories } from "data";

SwiperCore.use([Navigation, Pagination]);

type props = {
    images: string[];
}

export default function ImgCarousel({ images }: props) {

    return (
        <div className="">
            <Swiper
                id="img-swiper"
                slidesPerView={1}
                spaceBetween={0}
                navigation
                pagination
                className="img-swiper"
            >
                {
                    images.map((item) => (
                        <SwiperSlide key={`slide-${item}`} style={{ listStyle: "none" }}>
                            <img className="rounded-xl h-60 w-full roomImg" alt={`listing-image-${item}`} src={`/images/${item}.jpg`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
