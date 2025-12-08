import { X, MapPin } from 'lucide-react';

export default function Connect({ onClose, wallet, onConnect }) {
 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 p-4 modal-bottom-center">
      <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl shadow-2xl max-w-md w-full relative p-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center shadow-lg">
              <img src={wallet.image} alt={wallet.name} className="h-16 w-16" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {wallet.name}
          </h2>

          <p className="text-gray-700 leading-relaxed px-2">
            A Web3 wallet is a versatile and significant piece of technology that is set to revolutionize the way our online identity is presented and accessed.
          </p>

          <button
            onClick={onConnect}
            className="px-8 py-3 bg-transparent border-2 border-gray-700 text-gray-900 font-semibold rounded-full hover:bg-gray-700 hover:text-white transition-all duration-200 shadow-sm"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
