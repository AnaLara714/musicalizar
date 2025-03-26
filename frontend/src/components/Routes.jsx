import { BrowserRouter, Route } from "react-router"
import React from "react";

import Manager from "./Manager"

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/gerenciador" element={<Manager />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;