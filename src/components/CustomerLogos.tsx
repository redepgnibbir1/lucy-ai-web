
import React from 'react';

const CustomerLogos = () => {
  const customers = [
    {
      name: "Vår Gård Satsjöbaden",
      logo: "/logos/var-gard-satsjobaden.png",
      alt: "Vår Gård Satsjöbaden logo"
    },
    {
      name: "Hotell Villa Dahlia",
      logo: "/logos/hotell-villa-dahlia.png",
      alt: "Hotell Villa Dahlia logo"
    },
    {
      name: "Marholmen",
      logo: "/logos/marholmen.png",
      alt: "Marholmen logo"
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
              <img 
                src={customer.logo} 
                alt={customer.alt} 
                className="max-h-24 max-w-48 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <span className="font-lab-grotesque text-lucy-dark-gray">{customer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
