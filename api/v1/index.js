import request from '@/utils/request'

export const getProducts = () => request('/product', 'GET', {}, false)
export const newProduct = data => request('/product', 'POST', data)
