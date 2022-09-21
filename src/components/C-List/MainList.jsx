import React from 'react';
import Students from "./Lists/Student";
import Teacher from "./Lists/Teacher";
import Staff from "./Lists/Staff";

const MainList = () => {
    return (
        <div>
            <h1>This is Navigation Component  </h1>
            <Students />
            <Teacher />
            <Staff />

        </div>
    );
};

export default MainList;