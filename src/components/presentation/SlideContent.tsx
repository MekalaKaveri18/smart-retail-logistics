
import { Card } from '@/components/ui/card';
import { PresentationSlide } from './slidesData';

interface SlideContentProps {
  slide: PresentationSlide;
}

const SlideContent = ({ slide }: SlideContentProps) => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <Card className="w-full max-w-6xl h-full bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
        <div className="p-12 h-full flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              {slide.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="flex-1 flex items-center">
            {slide.content}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SlideContent;
