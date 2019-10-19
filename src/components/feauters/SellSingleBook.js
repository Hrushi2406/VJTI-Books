import React, { Component } from 'react'
import firebase from '../../config/fbConfig'

class SellSingleBook extends Component {
    state = {
        title: '',
        author: '',
        price: '',
        description: '',
        image: null,
        url: '',
        isLoading: false
    }
    
    handleFile = (e) => {
        //console.log(e.target.files[0])
        this.setState({
            image: e.target.files[0]
        })
    }

    handleUpload = (e) => {
        var image = this.state.image
        const storage = firebase.storage()
        const uploadTask = storage.ref('images/' + image.name).put(image)
        uploadTask.on('state_changed', 
        (snapshot) => {
            this.setState({
                isLoading: true
            })
        }, 
        (err) => {
            console.log(err)
        },
        () => {
            storage.ref('images/').child(image.name).getDownloadURL().then(url => {
                this.setState({
                    url: url,
                    isLoading: false
                })
            })
            
        }
    )
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
                    <h4 className="grey-tecxt darken-3">Sell </h4>
                    {this.state.isLoading ?   <div class="progress container">
                            <                       div class="indeterminate"></div>
                                                </div> : null}
                    <div className="center">
                        <img src={this.state.url || 'http://via.placeholder.com/400*300' } height='300' width='400'/>
                    </div>
                    <div className="container center">
                        <input className="" type="file" name="image" onChange={this.handleFile}></input>
                        <button className="btn" onClick = {this.handleUpload }>UploadImg</button>
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Subject</label>
                        <input type="text" id='title' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="author">Author</label>
                        <input type="text" id='author' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" id='price' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id='description' className = 'materialize-textarea' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SellSingleBook