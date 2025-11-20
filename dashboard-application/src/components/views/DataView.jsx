import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { fetchData, setSearchTerm, setCurrentPage } from '../../store/slices/dataSlice';
import SearchBar from '../common/SearchBar';
import DataTable from '../common/DataTable';
import ErrorMessage from '../common/ErrorMessage.jsx';

function DataView() {
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
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Data Management</h2>
                    <button
                        onClick={handleRefresh}
                        disabled={loading}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center space-x-2"
                    >
                        {loading ? <Loader2 size={20} className="animate-spin" /> : null}
                        <span>{loading ? 'Loading...' : 'Refresh Data'}</span>
                    </button>
                </div>

                <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
            </div>

            {error && <ErrorMessage message={error} />}

            {loading && (
                <div className="flex justify-center items-center py-12">
                    <Loader2 size={48} className="animate-spin text-indigo-600" />
                </div>
            )}

            {!loading && !error && (
                <DataTable
                    data={filteredData}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}

export default DataView;