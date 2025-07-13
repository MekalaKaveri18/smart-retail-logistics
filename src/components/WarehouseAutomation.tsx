
import { Card } from '@/components/ui/card';
import { Bot, Activity, Wifi, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const WarehouseAutomation = () => {
  const robotics = [
    { id: 'AGV-001', type: 'Picker Robot', status: 'Active', efficiency: 98, location: 'Zone A-3', battery: 85 },
    { id: 'AGV-002', type: 'Sorter Robot', status: 'Active', efficiency: 92, location: 'Zone B-1', battery: 72 },
    { id: 'AGV-003', type: 'Packer Robot', status: 'Maintenance', efficiency: 0, location: 'Service Bay', battery: 45 },
    { id: 'AGV-004', type: 'Transport Robot', status: 'Active', efficiency: 89, location: 'Zone C-2', battery: 91 }
  ];

  const iotSensors = [
    { zone: 'Temperature Control', value: '18.5°C', status: 'Optimal', trend: 'stable' },
    { zone: 'Humidity Control', value: '45%', status: 'Good', trend: 'decreasing' },
    { zone: 'Air Quality', value: 'Clean', status: 'Excellent', trend: 'stable' },
    { zone: 'Equipment Health', value: '94%', status: 'Good', trend: 'improving' }
  ];

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Bot className="w-5 h-5 text-orange-600" />
            Smart Warehouse Automation
          </h3>
          <p className="text-sm text-slate-600">Robotics, IoT sensors, and AI-driven operations</p>
        </div>
        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
          <Activity className="w-3 h-3 mr-1" />
          Real-time
        </Badge>
      </div>

      <div className="space-y-4 mb-6">
        <h4 className="font-medium text-slate-700 flex items-center gap-2">
          <Bot className="w-4 h-4 text-blue-500" />
          Robotics Fleet Status
        </h4>
        {robotics.map((robot) => (
          <div key={robot.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${
                robot.status === 'Active' ? 'bg-emerald-500' : 
                robot.status === 'Maintenance' ? 'bg-amber-500' : 'bg-red-500'
              }`}></div>
              <div>
                <p className="text-sm font-medium text-slate-800">{robot.id}</p>
                <p className="text-xs text-slate-600">{robot.type} • {robot.location}</p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-600">Efficiency:</span>
                <span className="text-sm font-medium text-slate-800">{robot.efficiency}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-600">Battery:</span>
                <Progress value={robot.battery} className="w-16 h-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-slate-700 flex items-center gap-2">
          <Wifi className="w-4 h-4 text-green-500" />
          IoT Environmental Monitoring
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {iotSensors.map((sensor, index) => (
            <div key={index} className="p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-slate-600">{sensor.zone}</p>
                <div className={`w-2 h-2 rounded-full ${
                  sensor.status === 'Excellent' ? 'bg-emerald-500' :
                  sensor.status === 'Good' || sensor.status === 'Optimal' ? 'bg-blue-500' : 'bg-amber-500'
                }`}></div>
              </div>
              <p className="text-sm font-bold text-slate-800">{sensor.value}</p>
              <p className="text-xs text-slate-500">{sensor.status}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WarehouseAutomation;
