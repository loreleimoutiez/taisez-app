import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage";
import { About } from "../Pages/About/About";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Router;