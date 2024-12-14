import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-rainbow bg-400% animate-gradient-animation">
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Child Div 1 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-80">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Headquarters</h3>
          <p className="text-lg text-gray-600">
            123 Main Street<br />
            Silicon Valley, CA<br />
            United States
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Phone:</strong> +1 555-123-4567<br />
            <strong>Email:</strong> hq@company.com
          </p>
        </div>

        {/* Child Div 2 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-80">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">European Office</h3>
          <p className="text-lg text-gray-600">
            456 Tech Road<br />
            Berlin<br />
            Germany
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Phone:</strong> +49 30 12345678<br />
            <strong>Email:</strong> europe@company.com
          </p>
        </div>

        {/* Child Div 3 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-80">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Asian Office</h3>
          <p className="text-lg text-gray-600">
            789 Innovation Way<br />
            Tokyo<br />
            Japan
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Phone:</strong> +81 3-1234-5678<br />
            <strong>Email:</strong> asia@company.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
