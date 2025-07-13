
import { Card } from '@/components/ui/card';
import { TrendingUp, Package, Truck, Warehouse } from 'lucide-react';

interface PerformanceMetricsProps {
  data: {
    totalOrders: number;
    inventoryTurnover: number;
    deliveryEfficiency: number;
    warehouseUtilization: number;
  };
}

const PerformanceMetrics = ({ data }: PerformanceMetricsProps) => {
  const metrics = [
    {
      title: "Daily Orders",
      value: data.totalOrders.toLocaleString(),
      change: "+12.3%",
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Inventory Turnover",
      value: `${data.inventoryTurnover.toFixed(1)}x`,
      change: "+0.8%",
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Delivery Efficiency",
      value: `${data.deliveryEfficiency.toFixed(1)}%`,
      change: "+2.1%",
      icon: Truck,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Warehouse Utilization",
      value: `${data.warehouseUtilization.toFixed(1)}%`,
      change: "-0.5%",
      icon: Warehouse,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-1">{metric.title}</p>
              <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
              <p className={`text-sm ${metric.change.startsWith('+') ? 'text-emerald-600' : 'text-red-500'} font-medium`}>
                {metric.change} vs yesterday
              </p>
            </div>
            <div className={`p-3 rounded-xl ${metric.bg}`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default PerformanceMetrics;
