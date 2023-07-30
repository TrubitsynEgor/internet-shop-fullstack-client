import { makeAutoObservable } from 'mobx'
import { IBrand, IDevice, IType } from '../shared'

class DeviceStore {
  private _types: IType[]
  private _brands: IBrand[]
  private _devices: IDevice[]

  constructor() {
    this._types = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Smartphone' },
    ]
    this._brands = [
      { id: 1, name: 'Lenova' },
      { id: 2, name: 'Apple' },
    ]
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.imgur.com/ruPD3kk.jpg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.imgur.com/ruPD3kk.jpg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.imgur.com/ruPD3kk.jpg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.imgur.com/ruPD3kk.jpg',
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.imgur.com/ruPD3kk.jpg',
      },
    ]
    makeAutoObservable(this)
  }

  setTypes(types: IType[]) {
    this._types = types
  }
  setBrands(brands: IBrand[]) {
    this._brands = brands
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
}

export default new DeviceStore()
