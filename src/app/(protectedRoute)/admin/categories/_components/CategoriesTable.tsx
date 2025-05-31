import React from 'react'
import DataTable from './data-table';
import { TCategory } from '../_types';

const CategoriesTable = ({ data }: { data: TCategory[] }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Categories ({data.length ?? ""})
      </h1>

      <div className="overflow-x-auto">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default CategoriesTable
