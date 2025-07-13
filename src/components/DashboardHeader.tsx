
import { Bell, Settings, Search, User, Presentation, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DashboardHeaderProps {
  onPresentationMode?: () => void;
  onExportPresentation?: () => void;
}

const DashboardHeader = ({ onPresentationMode, onExportPresentation }: DashboardHeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded opacity-90"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">RetailFlow AI</h1>
                <p className="text-sm text-slate-500">Supply Chain Intelligence</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search inventory, orders, analytics..." 
                className="pl-10 w-80 bg-slate-50 border-slate-200"
              />
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={onExportPresentation}
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Export PPT
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onPresentationMode}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              <Presentation className="w-4 h-4 mr-2" />
              Present
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
