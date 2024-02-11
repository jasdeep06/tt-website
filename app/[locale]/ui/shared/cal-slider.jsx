import { Slider } from "@nextui-org/slider";

const CalSlider = ({value,onChangeSlider,isOpen}) => {
    return (
        
        <Slider
        step={1}
        maxValue={30}
        minValue={0}
        defaultValue={0}
        showSteps={true}
        showTooltip={true}
        showOutline={true}
        disableThumbScale={true}
        hideValue={true}
        value={value}
        onChange={onChangeSlider}
        classNames={{
            base: "max-w-md",
            filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
            thumb: [
                "transition-size",
                "bg-gradient-to-r from-secondary-400 to-primary-500",
                "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6"
            ],
            step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
        }}
        tooltipProps={{
            offset: 10,
            isOpen: isOpen,
            classNames: {
                content: [
                    "p-1 shadow-xl rounded-lg",
                    "text-white bg-gradient-to-r from-secondary-400 to-primary-500 text-xl",
                ],
            },
        }}
    />
    )
}

export default CalSlider;