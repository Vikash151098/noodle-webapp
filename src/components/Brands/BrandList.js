import React, { memo } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import Brand from './Brand'
import { getUniqueBrands } from '../../services/brandsServices'
import "./index.css"

function BrandList() {
    const data = useSelector(state => state.brandData.brands);
    const dispatch = useDispatch()

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={() => {
                if (data && data.length > 0) {
                    // dispatch(addMore(data))
                    dispatch(getUniqueBrands())
                }
            }}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <div className='row' >
                {data && data.length > 0 && data.map((item, i) => <Brand
                    key={i}
                    brand={item.Brand}
                    country={item.Country}
                    stars={item.Stars}
                    styles={item.Style}
                    top_ten={item["Top Ten"]}
                    variety={item.Variety}
                />)}
            </div>
        </InfiniteScroll>

    )
}

export default memo(BrandList)