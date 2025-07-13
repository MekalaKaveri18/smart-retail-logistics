
import { Card } from '@/components/ui/card';
import { Package2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OrderTracking = () => {
  const recentOrders = [
    { id: 'ORD-2024-001', customer: 'John Smith', items: 3, value: '$299.99', status: 'Processing', priority: 'Standard', eta: '2 days' },
    { id: 'ORD-2024-002', customer: 'Sarah Wilson', items: 1, value: '$89.99', status: 'Shipped', priority: 'Express', eta: '1 day' },
    { id: 'ORD-2024-003', customer: 'Mike Johnson', items: 5, value: '$549.99', status: 'Delivered', priority: 'Standard', eta: 'Completed' },
    { id: 'ORD-2024-004', customer: 'Emma Davis', items: 2, value: '$199.99', status: 'Delayed', priority: 'Express', eta: '3 days' }
  ];

  const fulfillmentStats = [
    { stage: 'Order Received', count: 847, time: '< 5 min', efficiency: 99 },
    { stage: 'Inventory Check', count: 789, time: '< 2 min', efficiency: 98 },
    { stage: 'Picking & Packing', count: 723, time: '< 15 min', efficiency: 94 },
    { stage: 'Quality Control', count: 698, time: '< 8 min', efficiency: 97 },
    { stage: 'Shipping', count: 654, time: '< 1 hour', efficiency: 95 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'Shipped': return <Package2 className="w-4 h-4 text-purple-500" />;
      case 'Delivered': return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'Delayed': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-slate-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Shipped': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Delivered': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Delayed': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Package2 className="w-5 h-5 text-indigo-600" />
            Order Fulfillment & Tracking
          </h3>
          <p className="text-sm text-slate-600">End-to-end order management and customer experience</p>
        </div>
      </div>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="fulfillment">Fulfillment Pipeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="orders" className="mt-6">
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <p className="text-sm font-medium text-slate-800">{order.id}</p>
                    <p className="text-xs text-slate-600">{order.customer} • {order.items} items • {order.value}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-xs text-slate-600">ETA: {order.eta}</p>
                    <Badge variant={order.priority === 'Express' ? 'default' : 'secondary'} className="text-xs">
                      {order.priority}
                    </Badge>
                  </div>
                  <Badge variant="outline" className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="fulfillment" className="mt-6">
          <div className="space-y-4">
            {fulfillmentStats.map((stage, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-600">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{stage.stage}</p>
                    <p className="text-xs text-slate-600">{stage.count} orders • Avg: {stage.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    stage.efficiency >= 98 ? 'bg-emerald-100 text-emerald-700' :
                    stage.efficiency >= 95 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {stage.efficiency}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default OrderTracking;
