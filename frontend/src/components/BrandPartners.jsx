import React from 'react';

const BrandPartners = () => {
  const brandRows = [
    [
      { name: 'Neat', logo: 'https://logo.clearbit.com/neat.no' },
      { name: 'Cisco Webex', logo: 'https://logo.clearbit.com/webex.com' },
      { name: 'Poly', logo: 'https://logo.clearbit.com/poly.com' },
      { name: 'Jabra', logo: 'https://logo.clearbit.com/jabra.com' },
      { name: 'Lenovo', logo: 'https://logo.clearbit.com/lenovo.com' },
      { name: 'Logitech', logo: 'https://logo.clearbit.com/logitech.com' },
      { name: 'DTEN', logo: 'https://logo.clearbit.com/dten.com' },
      { name: 'Yealink', logo: 'https://logo.clearbit.com/yealink.com' },
      { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' }
    ],
    [
      { name: 'Bose', logo: 'https://logo.clearbit.com/bose.com' },
      { name: 'JBL', logo: 'https://logo.clearbit.com/jbl.com' },
      { name: 'Tannoy', logo: 'https://logo.clearbit.com/tannoy.com' },
      { name: 'Meyer Sound', logo: 'https://logo.clearbit.com/meyersound.com' },
      { name: 'QSC', logo: 'https://logo.clearbit.com/qsc.com' },
      { name: 'K-array', logo: 'https://logo.clearbit.com/k-array.com' },
      { name: 'Shure', logo: 'https://logo.clearbit.com/shure.com' },
      { name: 'Biamp', logo: 'https://logo.clearbit.com/biamp.com' }
    ],
    [
      { name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
      { name: 'LG', logo: 'https://logo.clearbit.com/lg.com' },
      { name: 'Sony', logo: 'https://logo.clearbit.com/sony.com' },
      { name: 'Panasonic', logo: 'https://logo.clearbit.com/panasonic.com' },
      { name: 'Christie', logo: 'https://logo.clearbit.com/christiedigital.com' },
      { name: 'Absen', logo: 'https://logo.clearbit.com/absen.com' },
      { name: 'NEC', logo: 'https://logo.clearbit.com/nec.com' },
      { name: 'Q-Lite', logo: 'https://logo.clearbit.com/q-lite.com' }
    ],
    [
      { name: 'Crestron', logo: 'https://logo.clearbit.com/crestron.com' },
      { name: 'Kramer', logo: 'https://logo.clearbit.com/kramerav.com' },
      { name: 'Extron', logo: 'https://logo.clearbit.com/extron.com' },
      { name: 'AMX', logo: 'https://logo.clearbit.com/amx.com' },
      { name: 'Atlona', logo: 'https://logo.clearbit.com/atlona.com' },
      { name: 'Liberty', logo: 'https://logo.clearbit.com/libertycable.com' },
      { name: 'PureLink', logo: 'https://logo.clearbit.com/purelinkav.com' },
      { name: 'Legrand', logo: 'https://logo.clearbit.com/legrand.com' }
    ],
    [
      { name: 'Cisco', logo: 'https://logo.clearbit.com/cisco.com' },
      { name: 'Cisco Meraki', logo: 'https://logo.clearbit.com/meraki.com' },
      { name: 'Aruba', logo: 'https://logo.clearbit.com/arubanetworks.com' },
      { name: 'Ruckus', logo: 'https://logo.clearbit.com/ruckuswireless.com' },
      { name: 'Netgear', logo: 'https://logo.clearbit.com/netgear.com' },
      { name: 'Fortinet', logo: 'https://logo.clearbit.com/fortinet.com' },
      { name: 'Sophos', logo: 'https://logo.clearbit.com/sophos.com' },
      { name: 'D-Link', logo: 'https://logo.clearbit.com/dlink.com' },
      { name: 'CommScope', logo: 'https://logo.clearbit.com/commscope.com' }
    ]
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brand Partnerships
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Constantly Innovating and Training our teams and empowering us
            <br />
            with cutting edge hardware
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="space-y-12">
          {brandRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
              {row.map((brand, index) => (
                <div
                  key={index}
                  className="group relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <div className="w-24 h-12 md:w-28 md:h-14 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter brightness-0"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div
                      className="hidden text-center font-bold text-gray-700 text-sm"
                      style={{ display: 'none' }}
                    >
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
