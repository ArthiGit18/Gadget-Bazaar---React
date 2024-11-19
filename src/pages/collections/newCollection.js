import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewCollection = () => {
    // Static JSON data
    const productData = [
        {
            _id: "1",
            name: "Smartwatch X100",
            description: "A sleek smartwatch with advanced health monitoring.",
            imageUrl: "/assets/gadgets/1 (3).png",
        },
        {
            _id: "2",
            name: "Smartwatch G200",
            description: "GPS-enabled smartwatch with customizable faces.",
            imageUrl: "/assets/gadgets/1 (4).png",
        },
        {
            _id: "3",
            name: "Smartwatch Pro",
            description: "Pro-level performance for your fitness journey.",
            imageUrl: "/assets/gadgets/1 (5).png",
        },
    ];

    // State to store product details
    const [productDetails, setProductDetails] = useState([]);

    // Simulate fetching data
    useEffect(() => {
        setProductDetails(productData); // Set static JSON data
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='container products_wrapper'>
            <h2>Our Newest Collections</h2>
            <div className='product_common '>
                {/* Product Listing */}
                {productDetails.map(product => (
                    <div key={product._id} className='product_detail'>
                        <div className='product_img'>
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className='product_ref'>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className='product_actions'>
                                <Button variant='text'>View</Button>
                                <div>
                                    <FavoriteIcon />
                                    <Button variant='text'>BUY NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
