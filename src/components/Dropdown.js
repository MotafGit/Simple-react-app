import { useState } from "react";


function Dropdown ({GenreOptions,onChange, selectGender}) {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleGenreOption = (event) => {
        setIsOpen (false);
        onChange (event);
        
    }

    const renderGenreOptions = GenreOptions.map((option) => {
        return (
            <div onClick = {() => handleGenreOption(option)} key= {option.value}>
                {option.label}
                
            </div>

        );
    });
    let content = 'Genre';
    if (selectGender){
        content = selectGender.label;
    }
  
    return (
        <div>
            <div onClick= {handleClick}>{content}</div>
            {isOpen && <div> {renderGenreOptions}</div>}
        </div>
    );

}

export default Dropdown;