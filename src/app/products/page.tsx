import Link from "next/link"
export default async function Products (){


    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const products= await res.json()

    return (
        <div>
            <h1>Products:-</h1>
       
            <ul>
     {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`} className="text-blue-500 underline">
              {product.title}
                       </Link> 

                        </li>
                ))}
            </ul>
        </div>
    )
}