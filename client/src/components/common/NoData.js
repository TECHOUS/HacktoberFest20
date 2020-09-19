import React from 'react';

const NoData = ({ apiData }) => {

    if(Object.keys(apiData).length > 0){
        return (
            <div style={{ textAlign: 'center' }}>
                <i className="fas fa-exclamation-circle fa-4x"></i>
                {console.log(apiData)}
                <p style={{ fontSize: '18px' }}>{apiData.message}</p>
            </div>
        );
    }else{
        // default view for the app
        return (
            <div style={{textAlign:'center'}}>
                <i className="fab fa-searchengin fa-4x"></i>
                <h2>Let us Hack the October</h2>
                <p style={{fontSize: '18px'}}>Check the progress above and see where you are</p>
            </div>
        )
    }
};

export default NoData;
