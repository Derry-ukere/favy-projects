import React from 'react'
import Films from './Films';
import Cards from './Cards';
import DashboardHeader from './DashboardHeader';
import Selectheader from './Selectheader';
import SideBar from './SideBar';


export const IndexTwo = () => {
  return (
    <div>
      <DashboardHeader />
      <Selectheader />
      <Cards />
      <Films />
      <SideBar />
    </div>
  )
}
