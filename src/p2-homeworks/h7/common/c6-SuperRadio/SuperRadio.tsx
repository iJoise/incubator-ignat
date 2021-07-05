import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.scss";


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
   options?: any[]
   onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
   {
      type,
      name,
      options,
      value,
      onChange,
      onChangeOption,
      ...restProps
   }
) => {
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      onChange && onChange(e)
      onChangeOption && onChangeOption(value)
   }


   const mappedOptions: React.ReactNode[] = options ? options.map((o, i) => (
      <label key={name + '-' + i} className={s.label}>
         <input
            className={s.radio}
            type={'radio'}
            // name, checked, value, onChange
            name={name}
            checked={o === value}
            onChange={onChangeCallback}
            value={o}
            {...restProps}
         />
         <span className={s.span}/>
         <span className={s.radio__name}>{o}</span>
      </label>
   )) : []

   return (
      <div className={s.radio_button}>
         {mappedOptions}
      </div>
   )
}

export default SuperRadio
