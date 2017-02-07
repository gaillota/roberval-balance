import React, {Component} from 'react';

class Result extends Component {
    render() {
        const result = this.props.result;

        return (
            <div className="results">
                <h3>Results</h3>
                <p>Ball {result.ball.index + 1} is the heaviest !</p>
                <p>Found in {result.round} rounds.</p>
            </div>
        );
    }
}

Result.propTypes = {
    result: React.PropTypes.object
};

export default Result;
