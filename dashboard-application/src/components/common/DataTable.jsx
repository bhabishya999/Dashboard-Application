import React from 'react';
import { Database } from 'lucide-react';
import Pagination from './Pagination';

function DataTable({ data, currentPage, itemsPerPage, onPageChange }) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    if (data.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                <Database size={48} className="mx-auto mb-4 opacity-50" />
                <p>No data available</p>
            </div>
        );
    }

    const keys = Object.keys(currentData[0]);

    const renderCellContent = (value) => {
        if (value === null || value === undefined) {
            return '-';
        }

        if (typeof value === 'object') {
            return (
                <div className="text-xs">
                    {Object.entries(value).map(([key, val]) => {
                        if (typeof val === 'object') return null;
                        return (
                            <div key={key} className="mb-1">
                                <span className="font-semibold"></span> {String(val)}
                            </div>
                        );
                    })}
                </div>
            );
        }

        return String(value);
    };

    return (
        <div className="space-y-4">
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        {keys.map(key => (
                            <th
                                key={key}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {key}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {currentData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            {keys.map(key => (
                                <td key={key} className="px-6 py-4 text-sm text-gray-700">
                                    {renderCellContent(row[key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalItems={data.length}
                itemsPerPage={itemsPerPage}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default DataTable;