import Product from "@/components/products/Product"
import type { ProductType } from "@/types"

export async function generateStaticParams() {
	const products = await fetch(`https://fakestoreapi.com/products/`).then(
		(res) => res.json()
	)

	return products.map((product: ProductType) => ({
		slug: product.id,
	}))
}

export default async function Home({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await fetch(`https://fakestoreapi.com/products/${id}`)
		.then((res) => res.json())
		.then((json) => json as ProductType)
	return (
		<main>
			<div className=''>
				<Product product={product} />
			</div>
		</main>
	)
}
