import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import type { ProductType } from "@/types"

export default async function ProductCard({
	product,
}: {
	product: ProductType
}) {
	return (
		<>
			<Card className='container grid grid-cols-2 grid-flow-col shadow-inner drop-shadow-lg max-h-fit p-6'>
				<CardHeader className='gap-4 md:gap-2 lg:gap-0'>
					<CardTitle className='text-2xl lg:text-lg lg:leading-snug font-medium'>
						{product.title}
					</CardTitle>
					<CardDescription className='text-md font-light line-clamp-2'>
						{product.description}
					</CardDescription>
				</CardHeader>
				<CardContent className='col-start-1 relative'>
					<Image
						className='max-h-96'
						src={product.image}
						fill
						style={{ objectFit: "contain" }}
						alt={product.title}
					></Image>
				</CardContent>
			</Card>
		</>
	)
}
