import React from 'react';
import { Menu } from 'lucide-react';

function Header({ toggleSidebar }) {
    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-700 hover:text-gray-900"
            >
                <Menu size={24} />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
            </div>
        </header>
    );
}

export default Header;