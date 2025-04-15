
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Star, Shield, ChartLine, ChartBar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', hotel: 4.2, competitors: 3.8 },
  { month: 'Feb', hotel: 4.3, competitors: 3.9 },
  { month: 'Mar', hotel: 4.1, competitors: 3.7 },
  { month: 'Apr', hotel: 4.4, competitors: 3.8 },
  { month: 'May', hotel: 4.5, competitors: 3.9 },
  { month: 'Jun', hotel: 4.6, competitors: 4.0 },
];

const config = {
  hotel: {
    label: 'Your Hotel',
    color: '#9b87f5',
  },
  competitors: {
    label: 'Competitors',
    color: '#D3E4FD',
  },
};

const feedbackData = [
  { category: 'Service', score: 4.7, change: '+0.2' },
  { category: 'Cleanliness', score: 4.6, change: '+0.1' },
  { category: 'Location', score: 4.8, change: '0.0' },
  { category: 'Value', score: 4.2, change: '+0.3' },
];

const ReputationDashboardSection = () => {
  const handleLearnMoreClick = () => {
    console.log('Learn more about Reputation Dashboard clicked');
    window.open('mailto:contact@lucy.ai?subject=Reputation Dashboard Inquiry', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="reputation-dashboard">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Reputation & Competition Dashboard</h2>
            <h3 className="text-xl md:text-2xl text-lucy-dark-gray/80 font-medium mb-4">
              Vad säger gästerna – egentligen?
            </h3>
            
            <p className="text-lg mb-6 text-lucy-dark-gray/80">
              Med Lucys Reputation Dashboard får du full koll på hur dina gäster upplever varje avdelning. Djupgående analys av recensioner visar vad gästerna verkligen tycker om service, rum, mat och mer.
            </p>
            
            <ul className="space-y-4 mb-8">
              <FeatureItem icon={Star} text="Spåra gästomdömen över tid med AI-baserad sentimentanalys" />
              <FeatureItem icon={Shield} text="Jämför ditt hotell med konkurrenterna i detalj" />
              <FeatureItem icon={ChartLine} text="Identifiera trender och förbättringsmöjligheter" />
              <FeatureItem icon={ChartBar} text="Visualisera data med lättförståeliga rapporter och diagram" />
            </ul>
            
            <Button 
              className="bg-lucy-dark-gray text-white hover:bg-opacity-90 font-medium px-8 py-6 h-auto"
              onClick={handleLearnMoreClick}
            >
              Se hur ni ligger till
            </Button>
          </div>
          
          <div className="order-1 md:order-2 bg-lucy-light-gray p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Gästbetyg jämfört med konkurrenter</h4>
              <div className="h-64 w-full">
                <ChartContainer config={config}>
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[3.5, 5]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="hotel" 
                      stroke="#9b87f5" 
                      strokeWidth={3} 
                      dot={{ r: 4 }} 
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="competitors" 
                      stroke="#D3E4FD" 
                      strokeWidth={3} 
                      dot={{ r: 4 }} 
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <h4 className="text-lg font-medium mb-3">Detaljerade gästomdömen</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kategori</TableHead>
                      <TableHead>Betyg</TableHead>
                      <TableHead>Förändring</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feedbackData.map((item) => (
                      <TableRow key={item.category}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {item.score}
                            <span className="ml-1 text-yellow-500">
                              <Star size={14} fill="currentColor" />
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className={`${item.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>
                          {item.change}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, text }: { icon: React.ComponentType<any>; text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="bg-lucy-blue-green p-2 rounded-full mt-0.5">
        <Icon className="h-5 w-5 text-lucy-dark-gray" />
      </div>
      <span className="text-lg">{text}</span>
    </li>
  );
};

export default ReputationDashboardSection;
