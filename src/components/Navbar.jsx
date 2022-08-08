import React from 'react';
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    const [t, i18n] = useTranslation("global")
    return (
        <nav className="bg-gray border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
                    <ul className="flex flex-row justify-around p-4 mt-4 rounded-lg border  bg-whitebg-gray-800 bg-gray-900 border-gray-700">
                        <li>
                            <Button variant="contained" onClick={()=> navigate("/")} >{t("navbar.inicio")}</Button>
                        </li>
                        <li>
                            <Button variant="contained" onClick={() => { i18n.changeLanguage("es") }}>{t("navbar.espanol")}</Button>
                        </li>
                        <li>
                            <Button variant="contained" onClick={() => { i18n.changeLanguage("en") }}>{t("navbar.ingles")}</Button>
                        </li>
                    </ul>
        </nav>
    )
}

