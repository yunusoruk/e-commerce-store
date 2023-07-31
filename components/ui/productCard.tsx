"use client"

import { Product } from '@/types';
import Image from 'next/image';
import type { FC } from 'react';
import IconButton from './iconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({
    data
}) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    return (
        <div className='bg-white group cursor-pointer p-3 space-y-4 border rounded-xl'>
            {/* IMAGES & ACTIONS */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt='Product Image'
                    src={data?.images?.[0].url}
                    fill
                    className='aspect-square object-cover rounded-md'
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-6">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={handleClick}
                            icon={<Expand size={20} className='text-gray-600' />}
                            className=''
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                            className=''
                        />
                    </div>
                </div>
            </div>
            {/* DESCRIPTION */}
            <div>
                <p className='font-semibold text-lg'>
                    {data.name}
                </p>
                <p className='text-sm text-gray-500'>
                    {data.category?.name}
                </p>
            </div>
            {/* PRICE */}
            <div className="flex items-center justify-between">
                <Currency
                    value={data.price}
                />
            </div>
        </div>
    );
}
export default ProductCard;