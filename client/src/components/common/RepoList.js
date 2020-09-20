import React from 'react';
import NoData from './NoData';
import PrIcon from './PrIcon';

const RepoList = ({apiData}) => {

    if(apiData.total_count > 0){
        return (
            apiData.items.map((repo) =>(
                <div key={repo.id} className="repoDiv">
                    <h4><PrIcon state={repo.state}/>
                    {repo.repository_url.replace("https://api.github.com/repos/", "")}</h4>
                    <p>{repo.title}</p>
                </div>
            ))
        )
    }else{
        return (
            <NoData apiData={apiData} message="No Data Found !"/>
        )
    }
}

export default RepoList
