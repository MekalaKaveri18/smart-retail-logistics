
import { Badge } from '@/components/ui/badge';

export interface PresentationSlide {
  id: number;
  title: string;
  content: React.ReactNode;
  voiceScript: string;
}

export const slides: PresentationSlide[] = [
  {
    id: 1,
    title: "RetailFlow AI: Supply Chain Intelligence",
    content: (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded opacity-90"></div>
        </div>
        <h2 className="text-3xl font-bold text-slate-800">RetailFlow AI</h2>
        <p className="text-xl text-slate-600">Transforming Retail Supply Chains with AI Intelligence</p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800">Real-time Analytics</h3>
            <p className="text-sm text-blue-600">Live supply chain monitoring</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <h3 className="font-semibold text-emerald-800">AI Optimization</h3>
            <p className="text-sm text-emerald-600">Predictive demand forecasting</p>
          </div>
        </div>
      </div>
    ),
    voiceScript: "Welcome to RetailFlow AI, your comprehensive supply chain intelligence platform. We're transforming retail operations through real-time analytics and AI-powered optimization, helping retailers create seamless, adaptive, and ultra-efficient supply chains."
  },
  {
    id: 2,
    title: "Performance Metrics Overview",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Key Performance Indicators</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-700 font-medium">Daily Orders</span>
              <div className="w-8 h-8 bg-emerald-200 rounded-lg"></div>
            </div>
            <div className="text-3xl font-bold text-emerald-800">12,847</div>
            <div className="text-sm text-emerald-600">+12.3% vs yesterday</div>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-700 font-medium">Delivery Efficiency</span>
              <div className="w-8 h-8 bg-blue-200 rounded-lg"></div>
            </div>
            <div className="text-3xl font-bold text-blue-800">94.2%</div>
            <div className="text-sm text-blue-600">+2.1% improvement</div>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-700 font-medium">Inventory Turnover</span>
              <div className="w-8 h-8 bg-purple-200 rounded-lg"></div>
            </div>
            <div className="text-3xl font-bold text-purple-800">8.3x</div>
            <div className="text-sm text-purple-600">Optimal efficiency</div>
          </div>
          <div className="p-6 bg-amber-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-amber-700 font-medium">Warehouse Utilization</span>
              <div className="w-8 h-8 bg-amber-200 rounded-lg"></div>
            </div>
            <div className="text-3xl font-bold text-amber-800">87.5%</div>
            <div className="text-sm text-amber-600">Near capacity</div>
          </div>
        </div>
      </div>
    ),
    voiceScript: "Our performance metrics show exceptional results across all key indicators. We're processing over 12,800 daily orders with a 12.3% increase from yesterday. Delivery efficiency has reached 94.2%, while maintaining an optimal inventory turnover rate of 8.3 times and warehouse utilization at 87.5%."
  },
  {
    id: 3,
    title: "AI-Powered Inventory Management",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Smart Inventory Optimization</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-800">Electronics</h3>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Current: 8,500</span>
                <span>Optimal: 9,000</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-800">Clothing</h3>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Current: 12,000</span>
                <span>Optimal: 11,500</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{width: '104%'}}></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-800">Home & Garden</h3>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Current: 6,800</span>
                <span>Optimal: 7,200</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-amber-600 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-slate-800 mb-2">AI Insights</h3>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Electronics category requires restocking within 3 days</li>
            <li>• Clothing shows healthy overstock for seasonal demand</li>
            <li>• Home & Garden trending upward with spring season</li>
          </ul>
        </div>
      </div>
    ),
    voiceScript: "Our AI-powered inventory management system provides real-time optimization across all product categories. Electronics are currently at 94% of optimal levels and require restocking within 3 days. Clothing shows a healthy overstock position for seasonal demand, while Home and Garden categories are trending upward with the spring season approaching."
  },
  {
    id: 4,
    title: "Demand Forecasting & Predictions",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">AI Demand Forecasting</h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">6-Week Prediction Model</h3>
            <Badge className="bg-purple-100 text-purple-700">95% Accuracy</Badge>
          </div>
          <div className="grid grid-cols-6 gap-2 mb-4">
            {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'].map((week, index) => (
              <div key={week} className="text-center p-2 bg-white rounded">
                <div className="text-xs text-slate-600">{week}</div>
                <div className="text-sm font-bold text-slate-800">
                  {[4200, 4800, 5200, 5800, 6200, 5900][index]}
                </div>
                <div className={`text-xs ${index < 3 ? 'text-blue-600' : 'text-purple-600'}`}>
                  {index < 3 ? 'Actual' : 'Predicted'}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg">
            <h4 className="font-semibold text-emerald-800">Holiday Season Impact</h4>
            <div className="text-2xl font-bold text-emerald-700">+18%</div>
            <p className="text-xs text-emerald-600">Expected demand surge</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800">Weather Correlation</h4>
            <div className="text-2xl font-bold text-red-700">-5%</div>
            <p className="text-xs text-red-600">Outdoor products decline</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Trending Products</h4>
            <div className="text-2xl font-bold text-blue-700">+32%</div>
            <p className="text-xs text-blue-600">Tech accessories spike</p>
          </div>
        </div>
      </div>
    ),
    voiceScript: "Our AI demand forecasting model operates with 95% accuracy, predicting demand 6 weeks ahead. We're anticipating an 18% surge due to the upcoming holiday season, while weather patterns suggest a 5% decline in outdoor products. Notably, tech accessories are showing a remarkable 32% spike in demand."
  },
  {
    id: 5,
    title: "Last-Mile Delivery Optimization",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Smart Delivery Management</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Active Routes</h3>
            {[
              { id: 'R001', driver: 'Alex Chen', efficiency: 94, status: 'On Time' },
              { id: 'R002', driver: 'Maria Santos', efficiency: 89, status: 'Ahead' },
              { id: 'R003', driver: 'David Kim', efficiency: 97, status: 'On Time' },
            ].map((route) => (
              <div key={route.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-medium text-slate-800">{route.id}</div>
                  <div className="text-sm text-slate-600">{route.driver}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-800">{route.efficiency}%</div>
                  <Badge variant={route.status === 'Ahead' ? 'default' : 'secondary'}>
                    {route.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Optimization Metrics</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Route Efficiency</span>
                  <span>92% / 95%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Fuel Consumption</span>
                  <span>78% / 85%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Customer Satisfaction</span>
                  <span>96% / 98%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '96%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    voiceScript: "Our last-mile delivery optimization system manages active routes with impressive efficiency. Route efficiency averages 92%, with drivers like David Kim achieving 97% efficiency. We're targeting 95% route efficiency through traffic pattern analysis and 85% fuel consumption optimization through electric vehicle integration."
  },
  {
    id: 6,
    title: "Warehouse Automation & IoT",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Smart Warehouse Operations</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Robotics Fleet</h3>
            {[
              { id: 'AGV-001', type: 'Picker Robot', status: 'Active', efficiency: 98 },
              { id: 'AGV-002', type: 'Sorter Robot', status: 'Active', efficiency: 92 },
              { id: 'AGV-003', type: 'Packer Robot', status: 'Maintenance', efficiency: 0 },
            ].map((robot) => (
              <div key={robot.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    robot.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-slate-800">{robot.id}</div>
                    <div className="text-sm text-slate-600">{robot.type}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-800">{robot.efficiency}%</div>
                  <div className="text-xs text-slate-600">{robot.status}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">IoT Environmental Monitoring</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { zone: 'Temperature', value: '18.5°C', status: 'Optimal' },
                { zone: 'Humidity', value: '45%', status: 'Good' },
                { zone: 'Air Quality', value: 'Clean', status: 'Excellent' },
                { zone: 'Equipment Health', value: '94%', status: 'Good' },
              ].map((sensor, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs font-medium text-slate-600">{sensor.zone}</div>
                  <div className="text-sm font-bold text-slate-800">{sensor.value}</div>
                  <div className="text-xs text-slate-500">{sensor.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    voiceScript: "Our smart warehouse automation system features a fleet of AGV robots with impressive performance metrics. The picker robot operates at 98% efficiency, while our sorter robot maintains 92% efficiency. IoT sensors continuously monitor environmental conditions, maintaining optimal temperature at 18.5 degrees Celsius and 45% humidity for product preservation."
  },
  {
    id: 7,
    title: "Future Innovations & ROI",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">The Future of Supply Chain</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">ROI Achievements</h3>
            <div className="space-y-3">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-700">23%</div>
                <div className="text-sm text-emerald-600">Cost Reduction</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">35%</div>
                <div className="text-sm text-blue-600">Efficiency Gain</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">89%</div>
                <div className="text-sm text-purple-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Next-Gen Innovations</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="font-medium text-slate-800">Autonomous Delivery Drones</div>
                <div className="text-sm text-slate-600">30-minute delivery radius</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                <div className="font-medium text-slate-800">Blockchain Traceability</div>
                <div className="text-sm text-slate-600">End-to-end transparency</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                <div className="font-medium text-slate-800">Predictive Maintenance</div>
                <div className="text-sm text-slate-600">Zero-downtime operations</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-2">RetailFlow AI: Transforming Tomorrow's Supply Chains</h3>
          <p className="text-blue-100">Seamless • Adaptive • Ultra-Efficient</p>
        </div>
      </div>
    ),
    voiceScript: "RetailFlow AI has delivered exceptional ROI with 23% cost reduction, 35% efficiency gains, and 89% customer satisfaction. Looking ahead, we're implementing autonomous delivery drones for 30-minute delivery radius, blockchain traceability for complete transparency, and predictive maintenance for zero-downtime operations. This is the future of supply chain management: seamless, adaptive, and ultra-efficient."
  }
];
