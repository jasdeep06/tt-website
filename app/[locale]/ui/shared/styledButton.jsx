import Link from "next/link";

const StyledButton = ({text,className,inverted=false }) => {
    const buttonClasses = `border-2 border-white rounded-lg p-3 px-6 text-nowrap ${className || ''} text-center`;
    const invertedButtonClasses = `border-2 border-[#151515] rounded-lg p-3 px-6  text-nowrap ${className || ''} text-black text-center`;
    return(
        // <button className={inverted ? invertedButtonClasses : buttonClasses} >{text}</button>
        <Link className={inverted ? invertedButtonClasses : buttonClasses} href="https://calendly.com/contact-xre/30min">{text}</Link>
    )
}

export default StyledButton;