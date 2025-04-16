import React from 'react';
import ProductCard from './ProductCard'; 

const productData = [
    {
        id: 1,
        name: 'Rolex Submariner',
        description: 'A classic dive watch with a timeless design.',
        price: '$10,500',
        imageUrl: '/i1.jpg',
    },
    {
        id: 2,
        name: 'Omega Speedmaster',
        description: 'The Moonwatch, perfect for space enthusiasts.',
        price: '$5,800',
        imageUrl: 'i2.jpg',
    },
    {
        id: 3,
        name: 'Tag Heuer Monaco',
        description: 'Iconic square design for the motorsport lover.',
        price: '$3,200',
        imageUrl: 'i3.jpg',
    },
    {
        id: 4,
        name: 'Patek Philippe Nautilus',
        description: 'A luxury sports watch with an elegant twist.',
        price: '$45,000',
        imageUrl: 'i4.jpg',
    },
    {
        id: 5,
        name: 'FHULUN',
        description: 'A classic dive watch with a timeless design.',
        price: '$8,500',
        imageUrl: '/i9.jpg',
    },
    {
        id: 6,
        name: 'Ajanta',
        description: 'The Moonwatch, perfect for space enthusiasts.',
        price: '$6,800',
        imageUrl: '/i0.jpg',
    },
    {
        id: 7,
        name: 'Titan',
        description: 'Iconic square design for the motorsport lover.',
        price: '$3,200',
        imageUrl: '/i7z.jpg',
    },
    {
        id: 8,
        name: 'Patek Philippe Nautilus',
        description: 'A luxury sports watch with an elegant twist.',
        price: '$55,000',
        imageUrl: '/i8.jpg',
    },
];

function ProductList() {
    return (
        <div className="product-list">
            {productData.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                />
            ))}
        </div>
    );
}

export default ProductList;
