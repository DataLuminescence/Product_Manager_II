import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ProductDisplay = (props) => {

    // handleDelete can go here

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Price </th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products && props.products.map((product, i) => (
                            <tr key={i}>
                                <td><Link to={"/product/view/" + product._id}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`/product/view`}> Edit </Link></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductDisplay;