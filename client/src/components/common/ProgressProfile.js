import React, { useState, useEffect } from 'react';

const ProgressProfile = (props) => {
    const [statement, setStatement] = useState('No Data Found !');

    useEffect(() => {
        switch (props.apiData.total_count) {
            case 0:
                setStatement('Too far Away !');
                break;
            case 1:
                setStatement('Just touched the October !');
                break;
            case 2:
                setStatement('Half way done !');
                break;
            case 3:
                setStatement('Too Close For Hacking !');
                break;
            case 4:
                setStatement('Goal Achieved !');
                break;
            default:
                if (props.apiData.total_count > 4) {
                    setStatement('Now You are Showing Off !');
                }
                break;
        }
    }, [props.apiData.total_count]);

    if(props.apiData.total_count > 0){
        return (
            <div className="progressProfile">
                <div className="inlineProfile">
                    <img
                        src={
                            props.apiData.items[0].user.avatar_url
                        }
                        alt="profile"
                    />
                    <p>{props.apiData.items[0].user.login}</p>
                </div>
                <div className="inlineProfile">
                    <p>
                        <span>{props.apiData.total_count}</span> / 4
                    </p>
                    <p>{statement}</p>
                </div>
            </div>
        );
    }else{
        return (<div></div>);
    }
};

export default ProgressProfile;
