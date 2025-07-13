
import { useState, useEffect } from 'react';
import { slides } from './presentation/slidesData';
import PresentationHeader from './presentation/PresentationHeader';
import PresentationControls from './presentation/PresentationControls';
import SlideContent from './presentation/SlideContent';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';

const PresentationMode = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { speakText, stopSpeech, togglePlayPause, toggleMute, isPlaying, isMuted } = useSpeechSynthesis();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      stopSpeech();
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      stopSpeech();
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSlideSelect = (index: number) => {
    stopSpeech();
    setCurrentSlide(index);
  };

  const handleTogglePlayPause = () => {
    togglePlayPause(slides[currentSlide].voiceScript);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Enter':
          e.preventDefault();
          handleTogglePlayPause();
          break;
        case 'Escape':
          stopSpeech();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col">
      <PresentationHeader
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isPlaying={isPlaying}
        isMuted={isMuted}
        onTogglePlayPause={handleTogglePlayPause}
        onToggleMute={toggleMute}
      />

      <SlideContent slide={slides[currentSlide]} />

      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onSlideSelect={handleSlideSelect}
      />
    </div>
  );
};

export default PresentationMode;
