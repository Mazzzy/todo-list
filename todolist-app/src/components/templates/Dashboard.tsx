import React, { FC } from "react";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";
import MainContent from "../organisms/MainContent";
import "./Dashboard.css";

const Dashboard: FC = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard-contents">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default Dashboard;
