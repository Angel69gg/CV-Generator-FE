import React from 'react';
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const [t, i18n] = useTranslation("global")
  return (
<nav className="bg-gray border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Button variant="contained" >{t("navbar.inicio")}</Button>
        </li>
        <li>
          <Button variant="contained" onClick={() => { i18n.changeLanguage("es") }}>{t("navbar.espanol")}</Button>
        </li>
        <li>
          <Button variant="contained" onClick={() => { i18n.changeLanguage("en")}}>{t("navbar.ingles")}</Button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

