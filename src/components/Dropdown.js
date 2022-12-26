import { useState } from "react";
import { GoChevronDown } from 'react-icons/go';


function Dropdown ({GenreOptions, selectGenre,onSelect}) {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleGenreOption = (event) => {
        setIsOpen (false);
        onSelect (event);

    }

    const renderGenreOptions = GenreOptions.map((option) => {
        return (
            <div onClick = {() => handleGenreOption(option)} key= {option.value}>
                {option.label}
            </div>

        );
    });
    let content = 'Choose genre';
    if (selectGenre){
        content = selectGenre.label;
    }

    return (
        <div>
            <div className="flex justify-between items-center cursor-pointer border rounded p-1 shadow bg-green-300"
                onClick= {handleClick}>
                {content}
            </div>
            {isOpen && <div className=" top-full border rounded p-1 shadow bg-green-300 w-18"> {renderGenreOptions}</div>}
        </div>
    );

}

export default Dropdown;