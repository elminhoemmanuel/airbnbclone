import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Virtual
} from "swiper";
import { houseCategories } from "data";
import CategoriesCard from "../CategoriesCard";

SwiperCore.use([Navigation, Pagination, Virtual]);

export default function CarouselLarge() {
    const [active, setActive] = useState(1);
    const onCardClick = (val: number) => setActive(val);

    return (
        <div className="hidden md:block">
            <Swiper
                id="swiper"
                virtual
                slidesPerView={12}
                spaceBetween={1}
                navigation
            >
                {
                    houseCategories.map((item) => (
                        <SwiperSlide key={`slide-${item.id}`} style={{ listStyle: "none" }}>
                            <CategoriesCard onClick={() => onCardClick(item.id)} data={item} active={active === item.id} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
