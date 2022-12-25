import { useState } from "react";
import Dropdown from "../components/Dropdown";

    function DropdownPage({onSelect, select}){
       const [selectGender,setSelection] = useState(null);

     const handleSelect = (option) => {
        onSelect (option);
        setSelection(option);
    };
 

    const GenreOptions = [
        {label: 'Fantasy', value:'Fantasy'},
        {label: 'SCI-FI' , value:'SCI-FI'},
        {label: 'Romance', value:'Romance'},
    ];

    return (
        <div className="flex">
            <Dropdown GenreOptions={GenreOptions} selectGender={selectGender} onChange={handleSelect} />
            
        </div>
      );

}

export default DropdownPage;