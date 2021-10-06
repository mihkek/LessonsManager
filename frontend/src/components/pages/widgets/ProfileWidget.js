import React from "react";

export const ProfileWidget = (props) => {
    /**
         Props:
        1. saveAction
        2. userData 
        3. setUserData
     */
        
    const onChangeFormValueAction = e => {
       props.setUserData({
              ...props.userData,
              [e.target.name]: e.target.value
            });
          };

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
                          <h4>{props.userData.login}</h4>
                          <p class="text-muted font-size-sm">{props.userData.aboutme}</p>
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
                          <input type="text" class="form-control" name="login" value={props.userData.login} onChange={onChangeFormValueAction}/>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" class="form-control" name="fullname" value={props.userData.fullname} onChange={onChangeFormValueAction}/>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-3">
                          <h6 class="mb-0">About me</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" class="form-control" name="aboutme" value={props.userData.aboutme} onChange={onChangeFormValueAction}/>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" class="form-control" name="email" value={props.userData.email} onChange={onChangeFormValueAction}/>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Password</h6>
                        </div>
                        <div class="row">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-9 text-secondary">
                          <input type="button" class="btn btn-primary px-4 small-button" value="Change password" />
                        </div>
                      </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" class="form-control" name="phone" value={props.userData.phone} onChange={onChangeFormValueAction}/>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <input type="text" class="form-control" name="addres" value={props.userData.addres} onChange={onChangeFormValueAction}/>
                        </div>
                      </div>

                      
                      <div class="row">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-9 text-secondary">
                          <input type="button" onClick={props.changeProfileAction} class="btn btn-primary px-4" value="Save Changes"/>
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