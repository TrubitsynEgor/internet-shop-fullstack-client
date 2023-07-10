export interface IDevice {
  id: number
  name: string
  price: number
  rating: number
  img: string
}

export type IType = Pick<IDevice, 'id' | 'name'>
export type IBrand = Pick<IDevice, 'id' | 'name'>
