import React from 'react';
import { addMessage, updateNewMessage } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
    componentDidMount() { }
    render() {
        return <Dialogs {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage
    }
}

export default compose (
    connect(mapStateToProps, { addMessage, updateNewMessage }),
    withAuthRedirect
) (DialogsContainer)