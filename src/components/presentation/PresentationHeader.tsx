
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Presentation, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlayPause: () => void;
  onToggleMute: () => void;
}

const PresentationHeader = ({
  currentSlide,
  totalSlides,
  isPlaying,
  isMuted,
  onTogglePlayPause,
  onToggleMute
}: PresentationHeaderProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Presentation className="w-6 h-6 text-white" />
          <span className="text-white font-medium">Presentation Mode</span>
          <Badge variant="outline" className="bg-white/10 text-white border-white/20">
            {currentSlide + 1} / {totalSlides}
          </Badge>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleMute}
            className="text-white hover:bg-white/10"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onTogglePlayPause}
            className="text-white hover:bg-white/10"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PresentationHeader;
