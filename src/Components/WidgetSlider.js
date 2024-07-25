import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import your widgets here
import GoogleSlides from './GoogleSlides';
import PomodoroTimer from './PomodoroTimer';
import GoogleSpreadsheet from './GoogleSpreadsheet';
import Leaderboard from './Leaderboard';
import TILCorner from './TILcorner';
import GoogleMeet from './GoogleMeet';
import GoogleCalendarDayView from './GoogleCalendarDayView';
import GoogleKeep from './GoogleKeep';
import GoogleForm from './GoogleForm';
import MusicWidget from './MusicWidget';
import PollWidget from './PollWidget';
import Announcements from './announcements';
import StepsHealthTracker from './StepsHealthTracker';
import DailyGrowthChecklist from './DailyGrowthChecklist';
import OpportunityBoard from './OpportunityBoard';
import NotionWidget from './NotionWidget';

const WidgetSlider = () => {
    return (
        <div className="swiper_container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3} // Show 3 slides at once
                spaceBetween={20} // Space between slides
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                breakpoints={{
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // When window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // When window width is < 640px
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
                className="swiper_container"
            >
                <SwiperSlide><GoogleSlides /></SwiperSlide>
                <SwiperSlide><PomodoroTimer /></SwiperSlide>
                <SwiperSlide><GoogleSpreadsheet /></SwiperSlide>
                <SwiperSlide><Leaderboard /></SwiperSlide>
                <SwiperSlide><TILCorner /></SwiperSlide>
                <SwiperSlide><GoogleCalendarDayView /></SwiperSlide>
                <SwiperSlide><GoogleKeep /></SwiperSlide>
                <SwiperSlide><NotionWidget /></SwiperSlide>
                <SwiperSlide><GoogleForm /></SwiperSlide>
                <SwiperSlide><GoogleMeet /></SwiperSlide>
                <SwiperSlide><PollWidget /></SwiperSlide>
                <SwiperSlide><Announcements /></SwiperSlide>
                <SwiperSlide><StepsHealthTracker /></SwiperSlide>
                <SwiperSlide><DailyGrowthChecklist /></SwiperSlide>
                <SwiperSlide><OpportunityBoard /></SwiperSlide>
                <SwiperSlide><MusicWidget /></SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default WidgetSlider;
