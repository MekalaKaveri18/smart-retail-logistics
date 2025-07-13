
import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import InventoryOverview from '@/components/InventoryOverview';
import DemandForecast from '@/components/DemandForecast';
import DeliveryOptimization from '@/components/DeliveryOptimization';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import WarehouseAutomation from '@/components/WarehouseAutomation';
import OrderTracking from '@/components/OrderTracking';
import { toast } from 'sonner';

const Index = () => {
  const [realTimeData, setRealTimeData] = useState({
    totalOrders: 12847,
    inventoryTurnover: 8.3,
    deliveryEfficiency: 94.2,
    warehouseUtilization: 87.5
  });

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

    // Welcome message
    setTimeout(() => {
      toast.success("Supply Chain Intelligence System Online", {
        description: "Real-time analytics and optimization active"
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DashboardHeader />
      
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
