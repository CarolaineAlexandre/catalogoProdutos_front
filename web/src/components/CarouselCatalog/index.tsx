// Carousel Component (CarouselCatalog.tsx)
import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface IPhoto {
  photo1?: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ photo1, photo2, photo3, photo4 }: IPhoto) {
  const sliderRef = useRef<Slider | null>(null);
  const [slider, setSlider] = useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [photo1, photo2, photo3, photo4].filter((photo) => photo);

  useEffect(() => {
    if (sliderRef.current) {
      setSlider(sliderRef.current);
    }
  }, []);

  const handlePrevious = () => {
    slider?.slickPrev();
  };

  const handleNext = () => {
    slider?.slickNext();
  };

  return (
    <Box position="relative" width="60%" height="auto" maxWidth="400px">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={handlePrevious}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={handleNext}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={sliderRef}>
        {cards.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        ))}
      </Slider>
    </Box>
  );
}
