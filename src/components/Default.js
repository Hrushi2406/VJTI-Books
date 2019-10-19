import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import BookImg from '../img/books.svg'
import { signOut } from '../store/actions/authActions'


const Default = (props) => {
    
    const { auth, signOut } = props
   console.log(auth.uid)
    return (
        <div className="container center">
            <h2 className="title">VJTI BOOKS</h2>
            <div className="row card">
                <div className="col s12 m3 card-image">
                    <img src={BookImg} alt="Books-Logo"/>
                </div>
                <div className="col s12 m6 ">
                    <p className="">
                        This is an books store for the students of VJTI where they can buy and sell there last year books
                    </p>
                    <div className="row center ">
                        <div className="col 12 m3">
                            <Link to='/login' className="btn waves-effect waves-blue">Login</Link>
                        </div>
                        <div className="col 12 m3 ">
                            <Link to='/signUp' className="btn-flat waves-effect waves-blue">Sign Up</Link>
                        </div>
                        <div className="col 12 m3 ">
                            <Link to='/sellSingleBook' className="btn-flat waves-effect waves-blue">sell Single Book</Link>
                        </div>
                        <div className="col 12 m3 ">
                            <button  className="btn-flat waves-effect waves-blue" onClick = { signOut}>LogOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)
