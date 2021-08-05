import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import Actions from './../redux/ActionCreators/index';

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(Actions, dispatch)
}