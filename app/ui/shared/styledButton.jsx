const StyledButton = ({text,className,inverted=false }) => {
    const buttonClasses = `border-2 border-white rounded-lg p-3 px-6 ${className || ''}`;
    const invertedButtonClasses = `border-2 border-[#151515] rounded-lg p-3 px-6 ${className || ''} text-black`;
    return(
        <button className={inverted ? invertedButtonClasses : buttonClasses}>{text}</button>
    )
}

export default StyledButton;