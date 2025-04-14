
import React from 'react';
import { Building, Hotel, MapPin } from 'lucide-react';

const CustomerLogos = () => {
  const customers = [
    {
      name: "Vår Gård Satsjöbaden",
      logo: <Building size={64} className="text-lucy-dark-gray opacity-70 hover:opacity-100 transition-opacity" />,
      placeholder: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      name: "Hotell Villa Dahlia",
      logo: <Hotel size={64} className="text-lucy-dark-gray opacity-70 hover:opacity-100 transition-opacity" />,
      placeholder: "https://images.unsplash.com/photo-1486718448742-163732cd1544"
    },
    {
      name: "Marholmen",
      logo: <MapPin size={64} className="text-lucy-dark-gray opacity-70 hover:opacity-100 transition-opacity" />,
      placeholder: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb"
    }
  ];

  return (
    <section className="py-16 bg-lucy-light-gray">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">Våra kunder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center">
          {customers.map((customer) => (
            <div 
              key={customer.name} 
              className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              title={customer.name}
            >
              {customer.logo}
              <span className="font-lab-grotesque text-lucy-dark-gray">{customer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
