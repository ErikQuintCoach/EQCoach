import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  Text,
  Flex,
  IconButton,
  useBreakpointValue,
  Center,
  Link,
  Button,
  useColorModeValue,
  Image,
  Heading,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';

// Import images directly
import MarcusImage from '../images/Marcus_42_image.jpg';
import ElaineImage from '../images/Elaine_Foto.jpg';
import VeronikaImage from '../images/Veronika_Bild.jpg';
import LisaImage from '../images/Lisa_Foto.jpg';

export function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenTextIndices, setHiddenTextIndices] = useState({}); // Changed to track hidden state
  const carouselRef = useRef(null);
  const variant = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const touchStartX = useRef(null);
  const bgOverlay = useColorModeValue('rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0)');

  const toggleText = (index) => {
    setHiddenTextIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getVisibleIndices = () => {
    const totalItems = testimonials.length;
    const indices = [];
    for (let i = 0; i < variant; i++) {
      indices.push((currentIndex + i) % totalItems);
    }
    return indices;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setHiddenTextIndices({});
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setHiddenTextIndices({});
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
  };

  const renderTile = (testimonial, index) => {
    const hasImage = Boolean(testimonial.image);
    const isHidden = hiddenTextIndices[index];
    const imageSrc = testimonial.title.includes('Marcus') ? MarcusImage 
    : testimonial.title.includes('Elaine') ? ElaineImage 
    : testimonial.title.includes('Veronika') ? VeronikaImage 
    : testimonial.title.includes('Lisa') ? LisaImage 
    : testimonial.image;

    return (
      <Box
        key={index}
        flex="1"
        px={2}
        minH="400px"
        position="relative"
        cursor="pointer"
        onClick={() => toggleText(index)}
      >
        <Card
          h="400px"
          position="relative"
          boxShadow="lg"
          overflow="hidden"
          transition="all 0.3s ease"
        >
          {hasImage && (
            <Image
              src={imageSrc}
              objectFit="cover"
              w="100%"
              h="100%"
              position="absolute"
              top={0}
              left={0}
              zIndex={0}
              opacity={1}
            />
          )}
          
          {/* Always visible title */}
          <Text 
            position="absolute"
            top={4}
            left={4}
            fontSize="xl" 
            fontWeight="bold"
            color="black"
            bg="rgba(255, 255, 255, 0.9)"
            p={2}
            borderRadius="md"
            zIndex={2}
            boxShadow="sm"
          >
            {testimonial.title}
          </Text>

          {/* Content */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={isHidden ? "transparent" : "transparent"} 
            zIndex={1}
            transition="all 0.3s ease"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={6}
            opacity={isHidden ? 0 : 1}
          >
            <Text 
              textAlign="center"
              color="black"
              bg="rgba(255, 255, 255, 0.9)" 
              p={4}
              borderRadius="md"
              mt={12}
              boxShadow="lg" 
              fontWeight="semibold"
              maxW="90%" 
            >
              {testimonial.description}
            </Text>

            {testimonial.link && (
              <Link 
                href={testimonial.link} 
                isExternal
                mt={4}
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  rightIcon={<ExternalLinkIcon />}
                  colorScheme="blue"
                  size="lg"
                >
                  Zur Studie
                </Button>
              </Link>
            )}
          </Box>

          {/* Click Instruction */}
          <Text
            position="absolute"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontSize="sm"
            bg="rgba(0, 0, 0, 0.5)"
            px={3}
            py={1}
            borderRadius="full"
            opacity={isHidden ? 0 : 0.8}
            transition="opacity 0.3s ease"
            zIndex={2}
          >
            Klicken zum Ausblenden
          </Text>
        </Card>
      </Box>
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Heading
        as="h2"
        textAlign="center"
        mb={8}
        fontSize="3xl"
        fontWeight="bold"
        color="black"
      >
        Feedback Karussell
      </Heading>
      <Flex
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        transition="transform 0.5s ease-in-out"
        mx="auto"
        maxW="1200px"
        px={4}
        gap={4}
      >
        {getVisibleIndices().map((index) => renderTile(testimonials[index], index))}
      </Flex>

      {/* Navigation Buttons */}
      <Center mt={6}>
        <IconButton
          aria-label="Previous slide"
          icon={<ChevronLeftIcon boxSize={6} />}
          onClick={prevSlide}
          mr={4}
          isRound
          colorScheme="blue"
          size="lg"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: 'lg',
          }}
          transition="all 0.2s"
        />
        <IconButton
          aria-label="Next slide"
          icon={<ChevronRightIcon boxSize={6} />}
          onClick={nextSlide}
          isRound
          colorScheme="blue"
          size="lg"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: 'lg',
          }}
          transition="all 0.2s"
        />
      </Center>
    </Box>
  );
}

// Example usage:
// <TestimonialCarousel 
//   testimonials={[
//     {
//       title: "Marcus, 42",
//       description: "Das Coaching war sehr wertvoll und hilfreich für meine persönliche Entwicklung. Erik hat mir geholfen, neue Perspektiven zu entdecken.",
//       image: MarcusImage
//     },
//     {
//       title: "Elaine, 21",
//       description: "Ich habe mich während des gesamten Coachings sehr wohl und sicher gefühlt. Erik schafft eine vertrauensvolle Atmosphäre.",
//       image: ElaineImage
//     },
//     {
//       title: "Veronika, 29",
//       description: "Eine bereichernde und transformierende Erfahrung! Erik schafft einen Raum, in dem man offen reflektieren kann. Durch seine klaren, gezielten Fragen und empathische Art sind wir in eine Tiefe vorgedrungen, die nachhaltige Veränderungen ermöglicht hat. Absolut empfehlenswert!",
//       image: VeronikaImage
//     },
//     {
//       title: "Coaching is effective!",
//       description: "Wissenschaftliche Studien zeigen die Wirksamkeit von Coaching bei der persönlichen Entwicklung.",
//       link: "https://example.com"
//     }
//   ]}
// />
