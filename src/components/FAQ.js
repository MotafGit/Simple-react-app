import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";


function FAQ ({drops}) {
    
    const [expanded,setExpanded] = useState(-1);

    const handleClick = (verifyIndex) => {
        setExpanded ((current) => {
            console.log ("clickou");
            if (current===verifyIndex){
                return -1;
            } else {
                return verifyIndex;
            }
        });
    };

    const renderDrops = drops.map ((drop, index) => {
        
        const IsExpanded = index === expanded;

        const icon = (
            <span className="text-2xl">
              {IsExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          );


        return (
            <div key = {drop.id}>
                <div className="flex justify-between p-1 items-center bg-blue-100 border-b cursor-pointer" onClick={() => handleClick(index)}>
                    {drop.label}
                    {icon}
                </div>
                <div>
                    {IsExpanded && <div className="border-b p-1 bg-blue-50">{drop.content}</div>}
                </div>
            </div>
        );

    });

    return <div className="mb-6 border-x border-t rounded">{renderDrops}</div>;
}

export default FAQ;