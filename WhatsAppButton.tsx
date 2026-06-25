import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+923256673856';
  const message = 'Hi Mirza! I am interested in your portfolio and services.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-75 group-hover:opacity-100"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all transform group-hover:scale-110">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.206-.368-.067c-1.264-.233-2.477-.571-3.644-1.111l.142 1.205c.168 1.43-.271 2.91-1.213 4.027C2.860 11.49 2 13.172 2 14.972c0 .364.033.724.1 1.077l.05.375-.375.221C.633 17.172 0 18.25 0 19.5c0 1.313.667 2.566 1.773 3.295L3.69 23h2.52l.5-1.468C7.859 22.258 9.401 22.5 11 22.5c5.523 0 10-4.477 10-10S16.523 2.5 11 2.5z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        <p className="text-sm font-semibold">{phoneNumber}</p>
        <p className="text-xs text-gray-300">Chat with me</p>
      </div>
    </a>
  );
};

export default WhatsAppButton;
