import React from 'react'
import BarChart from '../../components/charts/BarChart'
import PieChart from '../../components/charts/PieChart'
import LineChart from '../../components/charts/LineChart'

const ChartsScreen = () => {
  return (
    <div className="flex  flex-col justify-center items-center" >
    <div className="flex flex-row items-center  justify-evenly mt-16  w-full">
      <div className="w-1/2">
        <BarChart />
      </div>
      <div className="w-1/4">
        <PieChart />
      </div>
    </div>
    <div className="w-1/2 ">
      <LineChart />

    </div>
  </div>
  )
}

export default ChartsScreen