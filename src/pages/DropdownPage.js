import { useState } from "react";
import Dropdown from "../components/Dropdown";

    function DropdownPage({onSelect}){
        const [selectGenre,setSelectionGenre] = useState(null);

     const handleSelect = (option) => {
        onSelect (option);
        setSelectionGenre(option);
    };
    const GenreOptions = [
        {label: 'Fantasy', value:'Fantasy'},
        {label: 'SCI-FI' , value:'SCI-FI'},
        {label: 'Romance', value:'Romance'},
    ];

    return (
        <div className="flex">
            <Dropdown GenreOptions={GenreOptions} selectGenre={selectGenre} onSelect={handleSelect} />

        </div>
      );

}

export default DropdownPage;