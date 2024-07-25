import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import axios from 'axios';
import './Loading.css';

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await axios.get('https://lottie.host/1aa2e883-9650-4487-8cda-aaaf781e5030/54lc9MAVP1.json');
        setAnimationData(response.data);
      } catch (error) {
        console.error('Error fetching Lottie animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  if (!animationData) {
    return <div> </div>;
  }

  return (
    <div className="loading-container">
      <Lottie animationData={animationData} loop={true} />
      
    </div>
  );
};

export default Loading;
