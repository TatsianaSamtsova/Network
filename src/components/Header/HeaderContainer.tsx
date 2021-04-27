import React from 'react';
import Header from "./HeaderNew";
import {connect} from "react-redux";
import {getAuth, setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType ={
    isAuth: boolean,
    login: string | null
}
type MapDispatchToProps = {
    setUserDataAC: (id: number, email: string, login: string) => void
    getAuth:() => void
}


type PropsType = MapDispatchToProps & MapStateToPropsType





class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuth()

    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setUserDataAC, getAuth })(HeaderContainer)

