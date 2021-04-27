import React from 'react';
import Header from "./HeaderNew";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { authAPI } from '../../api/api';

type MapStateToPropsType ={
    isAuth: boolean,
    login: string | null
}
type MapDispatchToProps = {
    setUserDataAC: (id: number, email: string, login: string) => void
}


type PropsType = MapDispatchToProps & MapStateToPropsType





class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {

        authAPI.getAuth().then(data => {
                if (data.resultCode === 0){
                    let {id, login, email} = data.data;
                    this.props.setUserDataAC(id, email, login )
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)

