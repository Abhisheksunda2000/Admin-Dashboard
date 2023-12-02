import React from 'react'
import Dashbar from '../../components/dashbar/Dashbar';
import entries from '../../Data';
import "./dashboard.css";

export default function Dashboard() {
  return (
    <>   
         <Dashbar data = {entries}/>
    </>
  )
}
