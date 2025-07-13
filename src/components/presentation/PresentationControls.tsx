
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSlideSelect: (index: number) => void;
}

const PresentationControls = ({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onSlideSelect
}: PresentationControlsProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onPrevSlide}
          disabled={currentSlide === 0}
          className="text-white hover:bg-white/10 disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onSlideSelect(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          onClick={onNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="text-white hover:bg-white/10 disabled:opacity-50"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      
      <div className="mt-3 text-center">
        <p className="text-white/70 text-sm">
          Use arrow keys to navigate • Enter to play/pause • Space for next slide
        </p>
      </div>
    </div>
  );
};

export default PresentationControls;
