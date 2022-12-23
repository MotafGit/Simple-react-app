

function FAQ ({drops}) {
    
    const renderDrops = drops.map ((drop, index) => {
        
        return (
            <div key = {drop.id}>
                <div>{drop.label}</div>
                <div>{drop.content}</div>
            </div>
        );

    });

    return <div>{renderDrops}</div>;
}

export default FAQ;