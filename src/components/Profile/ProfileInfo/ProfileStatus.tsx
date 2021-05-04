import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {


        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)}
                               type="text"
                               value={this.props.status}
                               autoFocus={true}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

