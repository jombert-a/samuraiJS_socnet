import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    newStatusArea = React.createRef();
    toogleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
        this.props.setStatusTC(this.state.status);
    }
    changeStatus() {
        this.setState({
            status: this.newStatusArea.current.value,
        });
    }
    render() {
        return <>
            {this.state.editMode &&
                <div>
                    <textarea 
                        ref={this.newStatusArea} 
                        onChange={this.changeStatus.bind(this)}  
                        onBlur={this.toogleEditMode}
                        value={this.state.status}></textarea>
                </div>
            }
            {!this.state.editMode && 
                <div>
                    <span onDoubleClick={this.toogleEditMode}>{this.props.status || 'nothing to say'}</span>
                </div>
            }
        </>
    }
}

export default ProfileStatus;
