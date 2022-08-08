import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function Login() {
    const [t, i18n] = useTranslation("global")
    const navigate = useNavigate()
    function authenticate(){
        //get input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        //check to see if the password and username match
        if(username == "user" && password == "12345"){
             navigate('/inicio')
            console.log("exito")
        }else{ // username or password do not match
          //alert user
          alert("Sorry, password is incorrect.");
        }   
      }
    return (
        
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                    {t("login.usuario")}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                    {t("login.contrasena")}
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
                    </input>
                    <p className="text-red text-xs italic">{t("login.letrero")}</p>
                </div>
                <div className="flex items-center justify-between">
                    <Button variant="contained" color="success" type="submit" onClick={authenticate}>
                    {t("login.iniciar")}
                    </Button>
                </div>
            </div>
    )
}
