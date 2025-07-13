
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Brain, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DemandForecast = () => {
  const forecastData = [
    { period: 'Week 1', actual: 4200, predicted: 4100, confidence: 95 },
    { period: 'Week 2', actual: 4800, predicted: 4750, confidence: 93 },
    { period: 'Week 3', actual: 5200, predicted: 5150, confidence: 91 },
    { period: 'Week 4', actual: null, predicted: 5800, confidence: 89 },
    { period: 'Week 5', actual: null, predicted: 6200, confidence: 85 },
    { period: 'Week 6', actual: null, predicted: 5900, confidence: 82 }
  ];

  const insights = [
    { title: "Holiday Season Impact", change: "+18%", desc: "Expected demand surge" },
    { title: "Weather Correlation", change: "-5%", desc: "Outdoor products decline" },
    { title: "Trending Products", change: "+32%", desc: "Tech accessories spike" }
  ];

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-600" />
            AI Demand Forecasting
          </h3>
          <p className="text-sm text-slate-600">6-week predictive analytics</p>
        </div>
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          <Calendar className="w-3 h-3 mr-1" />
          Updated Daily
        </Badge>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="period" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              name="Actual Demand"
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              name="Predicted Demand"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-slate-700">Key Insights</h4>
        {insights.map((insight, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-800">{insight.title}</p>
              <p className="text-xs text-slate-600">{insight.desc}</p>
            </div>
            <div className={`text-sm font-semibold px-2 py-1 rounded ${
              insight.change.startsWith('+') ? 'text-emerald-600 bg-emerald-100' : 'text-red-600 bg-red-100'
            }`}>
              {insight.change}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DemandForecast;
