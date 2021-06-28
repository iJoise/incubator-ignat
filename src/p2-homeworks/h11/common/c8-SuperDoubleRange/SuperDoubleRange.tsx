import React, {ChangeEvent} from 'react'
import {Slider, withStyles} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[]
    // min, max, step, disable, ...
}

const RangeInput = withStyles({
   root: {
      color: '#52af77',
      height: 8,
   },
   thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
         boxShadow: 'inherit',
      },
   },
   active: {},
   valueLabel: {
      left: 'calc(-50% + 4px)',
   },
   track: {
      height: 8,
      borderRadius: 4,
   },
   rail: {
      height: 8,
      borderRadius: 4,
   },
})(Slider);


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

   const onChangeCallback = (e: ChangeEvent<{}>, newValue:number | number[]) => {
      // onChange && onChange(e) // сохраняем старую функциональность

      onChangeRange && onChangeRange(newValue as number[])
   }
   function valuetext(value: number) {
      return `${value}`;
   }
    // сделать самому, можно подключать библиотеки

    return (
        <>
           <RangeInput
           onChange={onChangeCallback}
           valueLabelDisplay="auto"
           aria-labelledby="range-slider"
           getAriaValueText={valuetext}
           value={value}
        />
        </>
    )
}

export default SuperDoubleRange
