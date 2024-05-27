export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.example.com/products');
    const data = await response.json();

    // Extract the required properties (img, title, price) from the API response
    const products = data.map((product) => ({
      img: product.img,
      title: product.title,
      price: product.price,
    }));

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}