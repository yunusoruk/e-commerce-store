"use client"

import { Product } from '@/types';
import type { FC } from 'react';
import Currency from './ui/currency';
import Button from './ui/button';
import { ShoppingBagIcon } from 'lucide-react';

interface InfoProps {
    data: Product
}

const Info: FC<InfoProps> = ({
    data
}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>
                {data.name}
            </h1>
            <div className="mt-3 flex items-end justiy-between">
                <p className='text-xl text-gray-900'>
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className='my-4' />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className='gont-semibold text-black'>
                        {data?.size?.name}
                    </h3>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: data?.color?.value }}
                    >

                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className='flex items-center gap-x-3'>
                    Add To Cart
                    <ShoppingBagIcon size={20} />
                </Button>
            </div>
        </div>
    );
}
export default Info;
