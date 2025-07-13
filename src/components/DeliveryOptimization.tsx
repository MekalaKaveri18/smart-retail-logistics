
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Route, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DeliveryOptimization = () => {
  const routes = [
    { id: 'R001', driver: 'Alex Chen', stops: 12, efficiency: 94, eta: '2:30 PM', status: 'On Time' },
    { id: 'R002', driver: 'Maria Santos', stops: 8, efficiency: 89, eta: '1:45 PM', status: 'Ahead' },
    { id: 'R003', driver: 'David Kim', stops: 15, efficiency: 97, eta: '3:15 PM', status: 'On Time' },
    { id: 'R004', driver: 'Sarah Johnson', stops: 10, efficiency: 85, eta: '4:00 PM', status: 'Delayed' }
  ];

  const optimizations = [
    { metric: 'Route Efficiency', current: 92, target: 95, improvement: 'Traffic pattern analysis' },
    { metric: 'Fuel Consumption', current: 78, target: 85, improvement: 'Electric vehicle integration' },
    { metric: 'Customer Satisfaction', current: 96, target: 98, improvement: 'Real-time notifications' }
  ];

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Route className="w-5 h-5 text-emerald-600" />
            Last-Mile Delivery Optimization
          </h3>
          <p className="text-sm text-slate-600">AI-powered route planning and real-time tracking</p>
        </div>
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
          <Zap className="w-3 h-3 mr-1" />
          Live Tracking
        </Badge>
      </div>

      <div className="space-y-4 mb-6">
        <h4 className="font-medium text-slate-700 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          Active Routes
        </h4>
        {routes.map((route) => (
          <div key={route.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600">Route</p>
                <p className="text-sm font-bold text-slate-800">{route.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">{route.driver}</p>
                <p className="text-xs text-slate-600">{route.stops} stops remaining</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-800 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {route.eta}
                </p>
                <p className="text-xs text-slate-600">{route.efficiency}% efficient</p>
              </div>
              <Badge variant={route.status === 'Delayed' ? 'destructive' : route.status === 'Ahead' ? 'default' : 'secondary'}>
                {route.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-slate-700">Optimization Targets</h4>
        {optimizations.map((opt, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">{opt.metric}</span>
              <span className="text-sm text-slate-600">{opt.current}% / {opt.target}%</span>
            </div>
            <Progress value={opt.current} className="h-2" />
            <p className="text-xs text-slate-500">{opt.improvement}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DeliveryOptimization;
