import ProductCard from "@/components/products/ProductCard"
import { ProductType } from "@/types"

export default async function Home() {
	const products = await fetch(`https://fakestoreapi.com/products/`).then(
		(res) => res.json()
	)

	return (
		<main>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
				{products.map((product: ProductType) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</main>
	)
}
