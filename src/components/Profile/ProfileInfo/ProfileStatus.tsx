import React from 'react';


class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status)

    }
    onStatusChange =(e:any) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    render() {


        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode}
                               type="text"
                               onChange={this.onStatusChange}
                               value={this.state.status}
                               autoFocus={true}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

