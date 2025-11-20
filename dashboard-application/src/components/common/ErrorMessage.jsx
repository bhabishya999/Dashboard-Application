import React from 'react';
import { AlertCircle } from 'lucide-react';

function ErrorMessage({ message }) {
    return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
                <h3 className="text-red-800 font-semibold">Error</h3>
                <p className="text-red-600 text-sm">{message}</p>
            </div>
        </div>
    );
}

export default ErrorMessage;