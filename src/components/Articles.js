import React from 'react';

function Articles({sortedList}) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {
                        sortedList.map((article, id) => {
                         return   (
                            <tr key={id} data-testid="article">
                                <td data-testid="article-title">{article.title}</td>
                               <td data-testid="article-upvotes">{article.upvotes}</td>
                               <td data-testid="article-date">{article.date}</td>
                            </tr>                            
                         )

                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
