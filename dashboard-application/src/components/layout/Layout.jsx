import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import Header from './Header';
import HomeView from '../views/HomeView';
import DataView from '../views/DataView';
import { setActiveView, fetchData } from '../../store/slices/dataSlice';
import { Loader2 } from 'lucide-react';

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const { activeView, loading, initialLoad } = useSelector((state) => state.data);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleViewChange = (view) => {
        dispatch(setActiveView(view));
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (initialLoad) {
            dispatch(fetchData());
        }
    }, [dispatch, initialLoad]);

    if (initialLoad && loading) {
        return (
            <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 size={64} className="animate-spin text-white mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Loading Dashboard</h2>
                    <p className="text-indigo-200">Please wait while we fetch your data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                activeView={activeView}
                onViewChange={handleViewChange}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-6">
                    {activeView === 'home' ? <HomeView /> : <DataView />}
                </main>
            </div>
        </div>
    );
}

export default Layout;