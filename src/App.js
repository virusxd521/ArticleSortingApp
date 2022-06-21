import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [sortedList, setSortedList] = useState([]);

         const generalSortingFunction = (prop) => {
         const afterSorting = articles.sort((a, b) => {
            if(a[prop] > b[prop] ){
                return -1;
            }
        });
        setSortedList([...afterSorting]);
     }

    const sortingByUpvotes = () => {        
        generalSortingFunction('upvotes');
    }

    const sortingByDate = () => {
        console.log('date')
        generalSortingFunction('date');
    }
    
    useEffect(() => {
        sortingByUpvotes();
    }, [])
 
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={sortingByUpvotes} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={sortingByDate} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles sortedList={sortedList} setSortedList={setSortedList} articles={articles}/>
        </div>
    );

}

export default App;
