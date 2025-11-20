import React from 'react';
import { Search } from 'lucide-react';

function SearchBar({ searchTerm, onSearch }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search data..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
            </div>
        </div>
    );
}

export default SearchBar;