import React from 'react';
import { Menu, X, Home, Database } from 'lucide-react';

function Sidebar({ isOpen, toggleSidebar, activeView, onViewChange }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'data', label: 'Data', icon: Database }
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-indigo-700">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button onClick={toggleSidebar} className="lg:hidden">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onViewChange(item.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                                    activeView === item.id
                                        ? 'bg-indigo-700 text-white'
                                        : 'hover:bg-indigo-800 text-indigo-200'
                                }`}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;