
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ExportSlide {
  id: number;
  title: string;
  bulletPoints: string[];
  voiceoverScript: string;
  speakerNotes: string[];
}

const PresentationExport = () => {
  const [copied, setCopied] = useState(false);

  const exportSlides: ExportSlide[] = [
    {
      id: 1,
      title: "RetailFlow AI: Supply Chain Intelligence",
      bulletPoints: [
        "Transforming Retail Supply Chains with AI Intelligence",
        "Real-time Analytics & Live Monitoring",
        "AI Optimization & Predictive Insights",
        "Seamless • Adaptive • Ultra-Efficient"
      ],
      voiceoverScript: "Welcome to RetailFlow AI, your comprehensive supply chain intelligence platform. We're transforming retail operations through real-time analytics and AI-powered optimization, helping retailers create seamless, adaptive, and ultra-efficient supply chains.",
      speakerNotes: [
        "Introduce the platform as a complete solution",
        "Emphasize the three key benefits: seamless, adaptive, ultra-efficient",
        "Set the stage for the transformation story"
      ]
    },
    {
      id: 2,
      title: "Performance Metrics Overview",
      bulletPoints: [
        "Daily Orders: 12,847 (+12.3% growth)",
        "Delivery Efficiency: 94.2% (+2.1% improvement)",
        "Inventory Turnover: 8.3x (Optimal efficiency)",
        "Warehouse Utilization: 87.5% (Near capacity)"
      ],
      voiceoverScript: "Our performance metrics show exceptional results across all key indicators. We're processing over 12,800 daily orders with a 12.3% increase from yesterday. Delivery efficiency has reached 94.2%, while maintaining an optimal inventory turnover rate of 8.3 times and warehouse utilization at 87.5%.",
      speakerNotes: [
        "Highlight the impressive growth numbers",
        "Explain what each metric means for business success",
        "Show how all metrics work together"
      ]
    },
    {
      id: 3,
      title: "AI-Powered Inventory Management",
      bulletPoints: [
        "Smart Inventory Optimization across all categories",
        "Electronics: 94% optimal (restock needed in 3 days)",
        "Clothing: 104% optimal (healthy seasonal overstock)",
        "Home & Garden: 94% optimal (trending upward)",
        "Real-time AI insights and recommendations"
      ],
      voiceoverScript: "Our AI-powered inventory management system provides real-time optimization across all product categories. Electronics are currently at 94% of optimal levels and require restocking within 3 days. Clothing shows a healthy overstock position for seasonal demand, while Home and Garden categories are trending upward with the spring season approaching.",
      speakerNotes: [
        "Explain how AI predicts optimal inventory levels",
        "Show specific examples of actionable insights",
        "Demonstrate proactive vs reactive management"
      ]
    },
    {
      id: 4,
      title: "Demand Forecasting & Predictions",
      bulletPoints: [
        "95% Accuracy in 6-Week Prediction Model",
        "Holiday Season Impact: +18% expected demand surge",
        "Weather Correlation Analysis: -5% outdoor products",
        "Trending Products Detection: +32% tech accessories",
        "Machine Learning algorithms adapt to market changes"
      ],
      voiceoverScript: "Our AI demand forecasting model operates with 95% accuracy, predicting demand 6 weeks ahead. We're anticipating an 18% surge due to the upcoming holiday season, while weather patterns suggest a 5% decline in outdoor products. Notably, tech accessories are showing a remarkable 32% spike in demand.",
      speakerNotes: [
        "Emphasize the 95% accuracy rate",
        "Explain how multiple factors are considered",
        "Show the business value of advance planning"
      ]
    },
    {
      id: 5,
      title: "Last-Mile Delivery Optimization",
      bulletPoints: [
        "Smart Route Management with 92% efficiency",
        "Active Fleet Monitoring (3 routes shown)",
        "Real-time Traffic & Weather Integration",
        "Fuel Consumption Optimization: 78% vs 85% target",
        "Customer Satisfaction: 96% rating"
      ],
      voiceoverScript: "Our last-mile delivery optimization system manages active routes with impressive efficiency. Route efficiency averages 92%, with drivers like David Kim achieving 97% efficiency. We're targeting 95% route efficiency through traffic pattern analysis and 85% fuel consumption optimization through electric vehicle integration.",
      speakerNotes: [
        "Highlight the driver performance examples",
        "Explain the environmental benefits",
        "Connect efficiency to customer satisfaction"
      ]
    },
    {
      id: 6,
      title: "Warehouse Automation & IoT",
      bulletPoints: [
        "Robotics Fleet: 3 AGV robots with 95% average efficiency",
        "Picker Robot (AGV-001): 98% efficiency - Active",
        "Sorter Robot (AGV-002): 92% efficiency - Active",
        "IoT Environmental Monitoring: Temperature, Humidity, Air Quality",
        "Smart Maintenance Scheduling"
      ],
      voiceoverScript: "Our smart warehouse automation system features a fleet of AGV robots with impressive performance metrics. The picker robot operates at 98% efficiency, while our sorter robot maintains 92% efficiency. IoT sensors continuously monitor environmental conditions, maintaining optimal temperature at 18.5 degrees Celsius and 45% humidity for product preservation.",
      speakerNotes: [
        "Show specific robot performance data",
        "Explain the importance of environmental monitoring",
        "Connect automation to product quality"
      ]
    },
    {
      id: 7,
      title: "Future Innovations & ROI",
      bulletPoints: [
        "Proven ROI: 23% cost reduction, 35% efficiency gain",
        "Customer Satisfaction: 89% rating",
        "Next-Gen Innovations:",
        "• Autonomous Delivery Drones (30-minute radius)",
        "• Blockchain Traceability (end-to-end transparency)",
        "• Predictive Maintenance (zero-downtime operations)"
      ],
      voiceoverScript: "RetailFlow AI has delivered exceptional ROI with 23% cost reduction, 35% efficiency gains, and 89% customer satisfaction. Looking ahead, we're implementing autonomous delivery drones for 30-minute delivery radius, blockchain traceability for complete transparency, and predictive maintenance for zero-downtime operations. This is the future of supply chain management: seamless, adaptive, and ultra-efficient.",
      speakerNotes: [
        "Lead with concrete ROI numbers",
        "Paint a vision of the future",
        "End with the three key attributes: seamless, adaptive, ultra-efficient"
      ]
    }
  ];

  const generatePresentationText = () => {
    let content = "RETAILFLOW AI - SUPPLY CHAIN INTELLIGENCE PRESENTATION\n";
    content += "=" + "=".repeat(60) + "\n\n";
    
    exportSlides.forEach((slide, index) => {
      content += `SLIDE ${slide.id}: ${slide.title.toUpperCase()}\n`;
      content += "-".repeat(50) + "\n\n";
      
      content += "KEY POINTS:\n";
      slide.bulletPoints.forEach(point => {
        content += `• ${point}\n`;
      });
      
      content += "\nVOICEOVER SCRIPT:\n";
      content += `"${slide.voiceoverScript}"\n\n`;
      
      content += "SPEAKER NOTES:\n";
      slide.speakerNotes.forEach(note => {
        content += `- ${note}\n`;
      });
      
      content += "\n" + "=".repeat(70) + "\n\n";
    });
    
    content += "PRESENTATION TIPS:\n";
    content += "- Use slides for 15-20 minutes total presentation\n";
    content += "- Allow 2-3 minutes per slide\n";
    content += "- Include live demo of the dashboard after slide 7\n";
    content += "- Encourage questions after each major section\n";
    content += "- Use voiceover scripts as speaking points, not word-for-word\n";
    
    return content;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatePresentationText());
      setCopied(true);
      toast.success("Presentation content copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const downloadPresentation = () => {
    const content = generatePresentationText();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RetailFlow-AI-Presentation-Content.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Presentation content downloaded!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Presentation Export</h1>
          <p className="text-xl text-slate-600">
            Complete presentation content with voiceover scripts for RetailFlow AI
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button onClick={copyToClipboard} className="flex items-center space-x-2">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy All Content'}</span>
          </Button>
          
          <Button onClick={downloadPresentation} variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download as Text</span>
          </Button>
        </div>

        <div className="space-y-6">
          {exportSlides.map((slide) => (
            <Card key={slide.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {slide.id}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">{slide.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Key Points
                    </h3>
                    <ul className="space-y-1">
                      {slide.bulletPoints.map((point, index) => (
                        <li key={index} className="text-slate-600 text-sm">• {point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Speaker Notes
                    </h3>
                    <ul className="space-y-1">
                      {slide.speakerNotes.map((note, index) => (
                        <li key={index} className="text-slate-600 text-sm">- {note}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-700 mb-2">Voiceover Script:</h3>
                  <p className="text-slate-600 text-sm italic bg-slate-50 p-3 rounded-lg">
                    "{slide.voiceoverScript}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-xl font-bold text-slate-800 mb-4">How to Use This Content</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">For PowerPoint:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Copy slide titles as PowerPoint slide titles</li>
                <li>• Use key points as bullet points on slides</li>
                <li>• Add voiceover scripts to speaker notes</li>
                <li>• Include visual elements from the dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Presentation Tips:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 15-20 minutes total presentation time</li>
                <li>• 2-3 minutes per slide</li>
                <li>• Include live demo after slides</li>
                <li>• Use scripts as speaking points, not word-for-word</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PresentationExport;
