import { useState, useEffect } from "react"
import axios from "axios";


export const MyProfile = (props) =>{
    const [userData, setUserData] = useState(undefined);
    useEffect(()=>{ 
        var session_id = localStorage.getItem('session_id')
        
        axios({
            method: 'post', 
            url: "access-control/profile", 
            secure: true,
            headers: {},
            data: {
                "session_id" : session_id
            }
        })
          .then(response => {
            setUserData(response.data.user)
            console.log(response.data.user)
          })
          .catch(error => {
            setUserData(undefined)
          })
    },setUserData)

    console.log(userData)
    return(
        <div class="container">
        <div class="main-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="profileLink.png" alt="Admin" class="rounded-circle p-1 " width="110"/>
                    <div class="mt-3">
                      <h4>Black nigger</h4>
                      <p class="text-muted font-size-sm">I will destroy your ass))</p>
                      <button class="btn btn-primary">Change profile photo</button>
                    </div>
                  </div>
                  <hr class="my-4"/>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Login</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="teacher"/>
                    </div>
                  </div>


                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="Black nigger"/>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">About me</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="I will destroy your ass)"/>
                    </div>
                  </div>


                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="john@example.com"/>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Password</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="password" class="form-control" value="john@example.com"/>
                    </div>

                    <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                      <input type="button" class="btn btn-primary px-4 small-button" value="Change password"/>
                    </div>
                  </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="(239) 816-9029"/>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="Bay Area, San Francisco, CA"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                      <input type="button" class="btn btn-primary px-4" value="Save Changes"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}