import React from 'react'
import { getAllCategories } from '../_actions';
import CategoriesTable from './CategoriesTable';


const AllCategoriesModule = async () => {
  const { data } = await getAllCategories();
    
  return (
    <div>
      <CategoriesTable data={data}/>
    </div>
  )
}

export default AllCategoriesModule
