import React, { useState, useEffect } from "react"
import axios from "axios";
import { ProfileWidget } from "./widgets/ProfileWidget";
import { ConfirmWindow } from '../library/additional/ConfirmWindow'
import {MESSAGE_MODE}  from '../library/additional/ConfirmWindow'

export const MyProfile = (props) =>{

    const [userData, setUserData] = useState({
        login:'',
        aboutme: '',
        fullname: '',
        phone: '',
        addres: '',
        email: ''
    });
    const [modalMessage, setModalMessage] = useState({
      show:false,
      message: ''
    })
    

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
           
          })
          .catch(error => {
            setUserData(undefined)
            return(<h1>Error while receiving data - {error}</h1>)
          })
    },setUserData)

    const saveData = () =>{
      var session_id = localStorage.getItem('session_id')
        axios({
          method: 'post', 
          url: "access-control/saveProfile", 
          secure: true,
          headers: {},
          data: {
              "session_id" : session_id,
              userData: userData
          }
        }).then(response => {
          setModalMessage({
              show: true,
              message: 'Data saved'
            })

        }).catch(error => {
          setModalMessage({
            show: true,
            message: 'Error('
          })
        })
    }
    const openCloseMessage = () => {
         setModalMessage({show:!modalMessage.show})
    }
   return(
    <React.Fragment>
        <ConfirmWindow
           visible={modalMessage.show}
           title='Message'
           content={<p>{modalMessage.message}</p>}
           action = {openCloseMessage}
           mode = {MESSAGE_MODE}
           />

      <ProfileWidget 
          userData = {userData}
          setUserData = {setUserData}
          changeProfileAction = {saveData}
      />
    </React.Fragment>
   )
}