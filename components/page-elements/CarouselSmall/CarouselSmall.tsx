import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Virtual,
    FreeMode, 
    Scrollbar, 
    Mousewheel
} from "swiper";
import { houseCategories } from "data";
import CategoriesCard from "../CategoriesCard";

SwiperCore.use([Virtual, FreeMode, Scrollbar, Mousewheel]);

export default function CarouselSmall() {
    const [active, setActive] = useState(1);
    const onCardClick = (val: number) => setActive(val);

    return (
        <div className="md:hidden">
            <Swiper
                id="swiper"
                virtual
                slidesPerView={5}
                spaceBetween={1}
                direction={"horizontal"}
                mousewheel
                freeMode
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
