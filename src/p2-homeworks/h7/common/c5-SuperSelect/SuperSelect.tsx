import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "./SuperSelect.module.scss";


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
   options?: string[]
   onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
   {
      options,
      onChange,
      onChangeOption,
      ...restProps
   }
) => {

   const mappedOptions: React.ReactNode = options
      ? options.map((opt, i) => <option className={s.option} key={i} value={opt}>{opt}</option>)
      : []; // map options with key

   const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value
      onChange && onChange(e)
      onChangeOption && onChangeOption(value)

   }

   return (
      <select onChange={onChangeCallback} {...restProps} className={s.select}>
         {mappedOptions}
      </select>
   )
}

export default SuperSelect
