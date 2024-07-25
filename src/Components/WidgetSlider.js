// Components/WidgetSlider.jsx
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

const WidgetSlider = ({ widgetVisibility }) => {
    return (
        <div className="swiper_container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
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
                className="swiper_container"
            >
                {widgetVisibility.googleSlides && <SwiperSlide><GoogleSlides /></SwiperSlide>}
                {widgetVisibility.pomodoroTimer && <SwiperSlide><PomodoroTimer /></SwiperSlide>}
                {widgetVisibility.googleSpreadsheet && <SwiperSlide><GoogleSpreadsheet /></SwiperSlide>}
                {widgetVisibility.leaderboard && <SwiperSlide><Leaderboard /></SwiperSlide>}
                {widgetVisibility.tilCorner && <SwiperSlide><TILCorner /></SwiperSlide>}
                {widgetVisibility.googleMeet && <SwiperSlide><GoogleMeet /></SwiperSlide>}
                {widgetVisibility.googleCalendarDayView && <SwiperSlide><GoogleCalendarDayView /></SwiperSlide>}
                {widgetVisibility.googleKeep && <SwiperSlide><GoogleKeep /></SwiperSlide>}
                {widgetVisibility.googleForm && <SwiperSlide><GoogleForm /></SwiperSlide>}
                {widgetVisibility.musicWidget && <SwiperSlide><MusicWidget /></SwiperSlide>}
                {widgetVisibility.pollWidget && <SwiperSlide><PollWidget /></SwiperSlide>}
                {widgetVisibility.announcements && <SwiperSlide><Announcements /></SwiperSlide>}
                {widgetVisibility.stepsHealthTracker && <SwiperSlide><StepsHealthTracker /></SwiperSlide>}
                {widgetVisibility.dailyGrowthChecklist && <SwiperSlide><DailyGrowthChecklist /></SwiperSlide>}
                {widgetVisibility.opportunityBoard && <SwiperSlide><OpportunityBoard /></SwiperSlide>}
                {widgetVisibility.notionWidget && <SwiperSlide><NotionWidget /></SwiperSlide>}
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
