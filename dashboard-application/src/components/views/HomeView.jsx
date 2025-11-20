import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { fetchData, setSearchTerm, setCurrentPage } from '../../store/slices/dataSlice';
import SearchBar from '../common/SearchBar';
import DataTable from '../common/DataTable';
import ErrorMessage from '../common/ErrorMessage.jsx';

function HomeView() {
    const dispatch = useDispatch();
    const { data, filteredData, loading, error, searchTerm, currentPage, itemsPerPage } = useSelector(
        (state) => state.data
    );

    useEffect(() => {
        if (data.length === 0 && !loading) {
            dispatch(fetchData());
        }
    }, [dispatch, data.length, loading]);

    const handleSearch = (term) => {
        dispatch(setSearchTerm(term));
    };

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    };

    const handleRefresh = () => {
        dispatch(fetchData());
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">Dashboard Overview</h2>
                <p className="text-indigo-100">View and manage your data</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                    <h3 className="text-gray-600 text-xs font-semibold uppercase">Total Records</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{data.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
                    <h3 className="text-gray-600 text-xs font-semibold uppercase">Current Page</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{currentPage}</p>
                </div>
            </div>

            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

            {error && <ErrorMessage message={error} />}

            {loading && (
                <div className="flex justify-center items-center py-12 bg-white rounded-lg shadow-md">
                    <Loader2 size={48} className="animate-spin text-indigo-600" />
                </div>
            )}

            {!loading && !error && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">User Data Table</h3>
                        <button
                            onClick={handleRefresh}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                        >
                            Refresh
                        </button>
                    </div>
                    <DataTable
                        data={filteredData}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
}

export default HomeView;