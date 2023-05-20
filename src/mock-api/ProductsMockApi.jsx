import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/api/products').reply(200, {
    products: [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'}
    ]
});

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data.products);
        };
        fetchData();
    }, []);

    return (
        <>
            <h2>Products</h2>
            <ul>
                {products.map(
                    ({id, name}) => (
                        <li key={id}>{name}</li>
                    )
                )}
            </ul>
        </>
    );
}

export default ProductList;
