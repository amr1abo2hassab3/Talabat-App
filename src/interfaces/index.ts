export interface IDataProduct {
  pageSize: number
  pageIndex: number
  count: number
  data: IProduct[]
}

export interface IProduct {
  id: number
  name: string
  description: string
  pictureUrl: string
  price: number
  productBrandId: number
  productBrand: string
  productTypeId: number
  productType: string
}


export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponse {
  displayName: string;
  email: string;
  token: string;
}

export interface IApiError {
  message: string;
}
