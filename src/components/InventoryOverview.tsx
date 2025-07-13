
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';
import { AlertTriangle, TrendingUp, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const InventoryOverview = () => {
  const inventoryData = [
    { category: 'Electronics', current: 8500, optimal: 9000, predicted: 9200 },
    { category: 'Clothing', current: 12000, optimal: 11500, predicted: 13000 },
    { category: 'Home & Garden', current: 6800, optimal: 7200, predicted: 7500 },
    { category: 'Sports', current: 4200, optimal: 4500, predicted: 4800 },
    { category: 'Beauty', current: 3800, optimal: 4000, predicted: 4200 },
    { category: 'Books', current: 2100, optimal: 2500, predicted: 2300 }
  ];

  const alerts = [
    { category: 'Electronics', type: 'Low Stock', severity: 'medium', items: 23 },
    { category: 'Sports', type: 'Overstock', severity: 'low', items: 8 },
    { category: 'Beauty', type: 'Stockout Risk', severity: 'high', items: 5 }
  ];

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-600" />
            AI-Powered Inventory Management
          </h3>
          <p className="text-sm text-slate-600">Real-time stock levels vs optimal and predicted demand</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            <TrendingUp className="w-3 h-3 mr-1" />
            95% Accuracy
          </Badge>
        </div>
      </div>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={inventoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="category" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />
            <Bar dataKey="current" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Current Stock" />
            <Bar dataKey="predicted" fill="#06b6d4" radius={[4, 4, 0, 0]} name="AI Predicted Demand" />
            <ReferenceLine y={8000} stroke="#ef4444" strokeDasharray="5 5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-slate-700 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          Smart Alerts & Recommendations
        </h4>
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                alert.severity === 'high' ? 'bg-red-500' : 
                alert.severity === 'medium' ? 'bg-amber-500' : 'bg-blue-500'
              }`}></div>
              <div>
                <p className="text-sm font-medium text-slate-800">{alert.category}</p>
                <p className="text-xs text-slate-600">{alert.type} - {alert.items} items affected</p>
              </div>
            </div>
            <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
              {alert.severity}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default InventoryOverview;
