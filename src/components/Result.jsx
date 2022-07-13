import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) =>{
    const { value } = props;
    debugger
    return(
        <div className="result">
            {value}
        </div>
    );
}

Result.propTypes = {
    value: PropTypes.string
}

export default Result;