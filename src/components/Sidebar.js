import Link from "./Link";

function Sidebar(){
    const links = [  
            {textToShow: 'empty ', path: '/'},
            {textToShow: 'Create Book ', path: '/BookCreate'},
            {textToShow: 'Show Books ', path: '/bookList'},
            {textToShow: 'Show FAQ ', path: '/FAQpage'},
    ];

    const renderLinks = links.map ((link) => {
        return <Link key={link.textToShow} to ={link.path}>{link.textToShow}</Link>;
    });

    return(
        <div className="grid grid-row-4">
            {renderLinks}
        </div>
    );
}

export default Sidebar;