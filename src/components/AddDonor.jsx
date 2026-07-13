import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddDonor = () => {

    const [input,changeInput]=useState(

     {  donor_name: "", 
        age: "",
        gender: "", 
        blood_group: "",  
        phone: "",  
        email: "",  
        city: "",  
        weight_kg: "",  
        last_donation_date: ""
     }

    )

    const inputHandler = (event) => {

        changeInput({...input,[event.target.name]:event.target.value})

    }
    
    const readValue =() => {

      console.log(input)

      axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(

        (response)=>{

          console.log(response.data)
          alert("Donor added successfully")

        }

      ).catch(

        (error) => {

            console.log(error)

        }

      )

    }

  return (
    <div>
        <NavigationBar />

    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="form-label">donor_name</label>
                  <input type="text" className="form-control" 
                  name="donor_name"
                  value={input.donor_name}
                  onChange={inputHandler}
                  />


                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">age</label>
                  <input type="text" className="form-control" 
                   name="age"
                   value={input.age}
                   onChange={inputHandler}
                  />

                </div>
                
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">gender</label>
                  <select id="" className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">blood_group</label>
                  <select id="" className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler}>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>

                </div>


                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">phone</label>
                  <input type="tel" className="form-control" 
                   name="phone"
                   value={input.phone}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                  <label htmlFor="" className="form-label">email</label>
                  <input type="email" className="form-control"
                   name="email"
                   value={input.email}
                   onChange={inputHandler}
                  />

                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">city</label>
                  <input type="text" className="form-control" 
                   name="city"
                   value={input.city}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">weight_kg</label>
                  <input type="number" className="form-control" 
                   min="50"
                   name="weight_kg"
                   value={input.weight_kg}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">last_donation_date</label>
                  <input type="date" className="form-control" 
                   name="last_donation_date"
                   value={input.last_donation_date}
                   onChange={inputHandler}
                  />

                </div>


                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-success" onClick={readValue}>Submit</button>

                </div>
            </div>
                </div>

            </div>
        </div>
    </div>


   
  )
}

export default AddDonor