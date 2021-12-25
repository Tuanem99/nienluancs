import React, {useEffect, useState} from 'react';
import productApi from '../../../API/productAPI';
import FuseAnimateGroup from '../../AnimateGroup/FuseAnimateGroup';
import Product from '../product';
import ProductSkeletonList from '../product/component/ProductSkeletonList';

function ProductList(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const res = await productApi.getAlls();
                setData(res);
            } catch (error) {
                console.log('fail load product', error);
            }
            setLoading(false);
        })()
    }, []);
    return (
        <div>
            <FuseAnimateGroup
                enter={{animation: "transition.slideUpBigIn"}}
                className="flex flex-wrap pb-5">
                {loading ? <ProductSkeletonList length={10}/> : data.map(value =>
                    <Product key={value.idsp} product={value}/>
                )}
            </FuseAnimateGroup>

        </div>

    );
}

export default ProductList;