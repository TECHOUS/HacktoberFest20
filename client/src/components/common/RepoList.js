import React from 'react';
import NoData from './NoData';
import PrIcon from './PrIcon';

const RepoList = ({ apiData }) => {
    const getRepoDate = (date) => {
        let defaultDate = new Date(date);
        return defaultDate
            .toString()
            .replace('GMT+0530 (India Standard Time)', '');
    };

    if (apiData.total_count > 0) {
        return apiData.items.map((repo) => (
            <div key={repo.id} className="repoDiv">
                <h4>
                    <PrIcon state={repo.state} />
                    {repo.repository_url.replace(
                        'https://api.github.com/repos/',
                        ''
                    )}
                </h4>
                <p>{repo.title}</p>
                <p>
                    <i className="far fa-clock"></i>
                    {' '}
                    {getRepoDate(repo.created_at)}
                </p>
            </div>
        ));
    } else {
        return <NoData apiData={apiData} message="No Data Found !" />;
    }
};

export default RepoList;
