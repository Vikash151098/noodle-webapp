import React, { memo, useCallback, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector } from 'react-redux';
import Brand from './Brand'
import "./index.css"

function BrandList() {
    debugger;
    const data = useSelector(state => state.brandData);
    const getUnique = (data) => {
        const set = new Set();
        const res = [];
        for (let i = 0; i < data.length; i++) {
            if (!set.has(data[i].Country)) {
                set.add(data[i].Country)
                res.push(data[i])
            }
        }
        return res;
    }
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const loadFunc = useCallback(
        () => {
            if (isLoading) {
                return;
            }
            setIsLoading(true);
            try {
                // if (isLoading)
                // const brands = getUnique(data)
                setList([...list])
            }
            catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        },
        [list, isLoading]
    );

    return (list ?
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
            threshold={10}
        >
            <div className='row' >
                {list && list.length > 0 && list.map((item, i) => <Brand
                    key={i}
                    brand={item.Brand}
                    country={item.Country}
                    stars={item.Stars}
                    styles={item.Style}
                    top_ten={item["Top Ten"]}
                    variety={item.Variety}
                />)}
            </div>
        </InfiniteScroll> : null

    )
}

export default memo(BrandList)