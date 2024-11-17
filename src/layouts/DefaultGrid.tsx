import React from "react";

type GridProps = {
    children: React.ReactNode;
};

const DefaultGrid: React.FC<GridProps> = ({ children }) => {
    return (
        <div className="grid gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] sm:grid-rows-[repeat(2,_min-content)] xl:grid-cols-[repeat(3,_minmax(13rem,_1fr))]">
            {children}
        </div>
    );
};

export default DefaultGrid;
