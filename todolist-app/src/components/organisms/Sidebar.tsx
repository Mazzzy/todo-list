import React, { FC } from "react";
import Create from "../molecules/Create/Create";
import Filters from "../molecules/Filter/Filters";

const Sidebar: FC = () => {
    return (
        <div className="side-bar">
            <Create />
            <Filters />
        </div>
    );
};

export default Sidebar;
