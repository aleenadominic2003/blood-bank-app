import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewDonor = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/donors").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        <NavigationBar />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

          <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-dark">
      <tr>
        
        <th>Donor Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Blood Group</th>
        <th>Phone</th>
        <th>City</th>
        <th>Weight_Kg</th>
        
      </tr>
    </thead>
    <tbody>
      {data.map((value, index) => (
        <tr key={index}>
          
          <td>{value.donor_name}</td>
          <td>{value.age}</td>
          <td>{value.gender}</td>
          <td>{value.blood_group}</td>
          <td>{value.phone}</td>
          <td>{value.city}</td>
          <td>{value.weight_kg}</td>
          
          <td>
            <button className="btn btn-primary btn-sm">
              View Donor
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default ViewDonor