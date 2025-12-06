import { type ComponentProps, type FC, type PropsWithChildren } from 'react'



export const CustomButton: FC<PropsWithChildren<ComponentProps<'button'>>> = ({ type, ...props }) => {
  return (
    <button className="my-button" type={type} {...props} />
  )
}
