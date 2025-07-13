
import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import InventoryOverview from '@/components/InventoryOverview';
import DemandForecast from '@/components/DemandForecast';
import DeliveryOptimization from '@/components/DeliveryOptimization';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import WarehouseAutomation from '@/components/WarehouseAutomation';
import OrderTracking from '@/components/OrderTracking';
import PresentationMode from '@/components/PresentationMode';
import PresentationExport from '@/components/PresentationExport';
import { toast } from 'sonner';

const Index = () => {
  const [realTimeData, setRealTimeData] = useState({
    totalOrders: 12847,
    inventoryTurnover: 8.3,
    deliveryEfficiency: 94.2,
    warehouseUtilization: 87.5
  });
  
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [showExportView, setShowExportView] = useState(false);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        totalOrders: prev.totalOrders + Math.floor(Math.random() * 5),
        deliveryEfficiency: 94.2 + (Math.random() - 0.5) * 2,
        warehouseUtilization: 87.5 + (Math.random() - 0.5) * 3
      }));
    }, 5000);

    setTimeout(() => {
      toast.success("Supply Chain Intelligence System Online", {
        description: "Real-time analytics and optimization active"
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePresentationMode = () => {
    setIsPresentationMode(true);
    toast.success("Presentation Mode Activated", {
      description: "Use arrow keys to navigate and Enter to play voice narration"
    });
  };

  const handleExportPresentation = () => {
    setShowExportView(true);
    toast.success("Presentation Export Ready", {
      description: "Complete content with voiceover scripts available"
    });
  };

  const handleExitPresentation = () => {
    setIsPresentationMode(false);
  };

  const handleExitExport = () => {
    setShowExportView(false);
  };

  if (isPresentationMode) {
    return (
      <div>
        <PresentationMode />
        <button
          onClick={handleExitPresentation}
          className="fixed top-4 right-4 z-50 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
        >
          Exit Presentation
        </button>
      </div>
    );
  }

  if (showExportView) {
    return (
      <div>
        <PresentationExport />
        <button
          onClick={handleExitExport}
          className="fixed top-4 right-4 z-50 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DashboardHeader 
        onPresentationMode={handlePresentationMode}
        onExportPresentation={handleExportPresentation}
      />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <PerformanceMetrics data={realTimeData} />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <InventoryOverview />
          </div>
          <div>
            <DemandForecast />
          </div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <DeliveryOptimization />
          <WarehouseAutomation />
        </div>
        
        <OrderTracking />
      </main>
    </div>
  );
};

export default Index;
