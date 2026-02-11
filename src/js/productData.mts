import type {Product} from "./types.mts"
const baseURL = import.meta.env.PUBLIC_SERVER_URL;

function convertToJson(res:Response) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export function getProducts(params: string) {  
  if (!params) {
    params = ""; //Subject to change
  }
  return fetch(`http://localhost:3000/api/v1/products/${params}`)
    .then(convertToJson)
    .then((data) => data);
}

export async function findProductById(id:string) {
  const response = await fetch(baseURL + `products/${id}`);
  const product = await convertToJson(response) as Product;
  console.log(product)
  return product;
}
