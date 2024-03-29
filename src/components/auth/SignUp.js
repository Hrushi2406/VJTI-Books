import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        phoneNo: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h4 className="grey-tecxt darken-3">Sign Up</h4>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="userName">UserName</label>
                        <input type="text" id='userName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignUp