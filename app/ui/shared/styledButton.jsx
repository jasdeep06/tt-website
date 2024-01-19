const StyledButton = ({text,className }) => {
    const buttonClasses = `border-2 border-white rounded-lg p-3 px-6 ${className || ''}`;
    return(
        <button className={buttonClasses}>{text}</button>
    )
}

export default StyledButton;