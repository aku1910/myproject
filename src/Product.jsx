import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='products'>
            
                {data.map((product) => (
                    <p key={product.id}>
                        <img src={product.ProductImage}/>
                        <h4>{product.Name}</h4>
                        <p>{product.Price}</p>
                    </p>
                ))}
            
        </div>
    );
};

export default Product;
