import className from 'classnames';

function Button ({
    children,
    primary,
    square,
    ...rest
}) {
    const classes = className(rest.className, '', {
        'border-black-500 bg-blue-500 text-white rounded-full': primary,
        'border-black-500 bg-gray-500 text-white': square


    });

    return <button {...rest} className ={classes}>{children}</button>;
}


export default Button;