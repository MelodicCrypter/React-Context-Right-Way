import React, { useContext } from 'react';

import { AppContext } from "components/context/AppProvider";

import './themer.css'

export default function Themer() {
    const { nextTheme, toggleTheme } = useContext(AppContext);

    return (
    <div id="testContainer">
      <button onClick={toggleTheme}>{nextTheme}</button>
    </div>
    );
}
