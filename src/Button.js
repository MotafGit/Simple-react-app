import className from 'classnames';

function Button ({
    children,
    primary,
    ...rest
}) {
    const classes = className(rest.className, '', {
        'border-black-500 bg-blue-500 text-white rounded-full': primary,

    });

    return <button {...rest} className ={classes}>{children}</button>;
}


export default Button;