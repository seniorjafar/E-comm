// This function is exported so it can be imported and used in other parts of your application.
export async function getData(products) {
  // Construct the URL by appending the 'products' parameter to the base URL.
  const res = await fetch(`https://fakestoreapi.com/${products}`);
  
  // Check if the response status code indicates success.
  if (!res.ok) {
    // If not, throw an error.
    throw new Error('Failed to fetch data');
  }
  
  // If the response is successful, parse the JSON body of the response and return it.
  return res.json();
}