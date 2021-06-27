import React from 'react'
import data from '../data/userdata.json'
import { connect } from 'react-redux'
import { dataAction, loggedInAction } from '../redux/action'
const DashBoard = (props) => {
    props.dataAction(data.user)
    return (
        <div>
            <button style={{
                right: "30px",
                position: "absolute",
                margin: "5px",
                top: "5px"
            }}
                onClick={() => {
                    localStorage.clear()
                    props.loginAction(false)
                    props.dataAction([])
                }}
            >LogOut</button>
            <div style={{ margin: "30px" }}>
                <table id="table">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    {
                        props.userdata.map((el, idx) => {
                            const { id, name, age, gender, email, phoneNo } = el
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{gender}</td>
                                    <td>{email}</td>
                                    <td>{phoneNo}</td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userdata: state.userdata,
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        dataAction: (payload) => { dispatch(dataAction(payload)) },
        loginAction: (payload) => {
            dispatch(loggedInAction(payload))
        }
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(DashBoard)

