const LanguageButton = ({text,selected,switchLanguage }) => {
    // const borderColor = selected ? "#151515" : "#F3F3F3";
    // const fontWeight = selected ? "font-bold" : "font-normal";
    const selectedStyles = `text-black font-bold border-[#151515] border-solid 
    px-6 py-3 rounded-full border-2 w-min transition-all`

    const unselectedStyles = `text-black font-normal border-[#F3F3F3] border-solid 
    px-6 py-3 rounded-full border-2 w-min transition-all hover:bg-[#E0E0E0]`;

    const buttonClasses = `${selected ? selectedStyles : unselectedStyles}`;
    return(
        <button className={buttonClasses} key={text} onClick={() => switchLanguage(text)}>{text}</button>
    )
}



const LanguageButtons = ({languages,selectedLang,switchLanguage}) => {
    return(
        <div className="flex flex-row justify-center md:justify-between flex-wrap my-2 md:my-0">
            {languages.map((language) => {
                return <LanguageButton text={language} selected={selectedLang === language} switchLanguage={switchLanguage}/>
            })}
        </div>
    )

}

export default LanguageButtons;