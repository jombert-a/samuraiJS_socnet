import React from 'react';
import { addMessage, updateNewMessage } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

class DialogsContainer extends React.Component {
    componentDidMount() { }
    render() {
        return <Dialogs data={this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage
    }
}

export default connect(mapStateToProps, { addMessage, updateNewMessage })(DialogsContainer);

