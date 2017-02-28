import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import CreateRecord from './CreateRecord';
import UpdateRecord from './UpdateRecord';
import TableRecords from './TableRecords';
import {
    MODAL_CREATE_RECORD,
    MODAL_UPDATE_RECORD
} from './constants';

class Account extends Component {
    static propTypes = {
        initialState: PropTypes.object,
        state: PropTypes.object,
        stateChanged: PropTypes.bool,
        actions: PropTypes.object
    };

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchRecords();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const { state, actions } = this.props;

        return (
            <div style={{ margin: -15 }}>
                {state.modal.name === MODAL_CREATE_RECORD &&
                <CreateRecord state={state} actions={actions} />
                }
                {state.modal.name === MODAL_UPDATE_RECORD &&
                <UpdateRecord state={state} actions={actions} />
                }
                <TableRecords state={state} actions={actions} />
            </div>
        );
    }
}

export default Account;
