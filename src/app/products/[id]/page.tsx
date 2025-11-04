interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const product = await res.json();

    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">{product.title}</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="p-6 text-red-500">
        <h1>Failed to load product details 😢</h1>
      </div>
    );
  }
}
