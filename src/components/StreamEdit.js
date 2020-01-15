import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../actions';

import StreamForm from './StreamForm';

class StreamEdit extends Component {
    // we call this because the component is isolated,
    // needs to fetch its own data
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h3>Edit Stream</h3>
                    {/* initialValues comes from redux-form */}
                    <StreamForm
                        onSubmit={this.onSubmit}
                        // using lodash to only get values we want to change
                        // initialValues={this.props.stream}
                        initialValues={_.pick(this.props.stream, 'title', 'description')}
                    />
                </div>
            )

        }
    }
}

const mapStateToProps = (state, ownProps) => {
    // stream id accessible in props, list of streams accessible in state
    // so we access props via ownProps.
    // extra props (match) is there thanks to routes.
    // we're returning the stream that the user is editing via following line:
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {
    fetchStream,
    editStream
})(StreamEdit);