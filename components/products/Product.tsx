import Image from "next/image"

import type { ProductType } from "@/types"

export default async function ProductCard({
	product,
}: {
	product: ProductType
}) {
	return (
		<div>
			<div className='flex lg:flex-row lg:justify-around flex-col p-4'>
				<Image
					className=''
					src={product.image}
					width={500}
					height={500}
					alt={product.title}
				></Image>
				<div className='max-w-md'>
					<h1 className='text-2xl font-medium text-center mt-10'>
						{product.title}
					</h1>
					<p className='font-light mt-4'>{product.description}</p>
				</div>
			</div>
		</div>
	)
}
