import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllImage } from '../../services/brandsServices';

const Card = React.lazy(() => import('./Card'));

function BrandsByCountry() {
    const { country } = useParams();
    const dispatch = useDispatch();
    const brand = useSelector(state => state.brandData);
    const images = useSelector(state => state.imageData);
    const brands = brand.filter(item => item.Country === country)

    useEffect(() => {
        dispatch(getAllImage())
    }, [])
    return (
        <div className='row'>
            <Suspense fallback={<div>Loading...</div>}>
                {brands.length > 0 && images.length && brands.map(item => <Card images={images} brand={item.Brand} />)}
            </Suspense>
        </div>
    )
}

export default BrandsByCountry