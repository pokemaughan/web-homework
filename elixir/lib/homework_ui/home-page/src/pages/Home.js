import React, {Component} from 'react';
// import {API_URL } from './config'

class Home extends Component {

    //attempt at a file importer.. kept getting stonewalled when trying to use
    //'getelementbyid().onclick/onchange because the html hadn't loaded yet

    // fileSelectHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }
    //
    // fileUploadHandler = event => {
    //     const files = Array.from(event.target.files)
    //     this.setState({uploading: true})
    //
    //     const formData =
    //         files.forEach((file, i) => {
    //             formData.append(i.file);
    //         })
    //
    //     fetch(`${API_URL}/image-upload`, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(images => {
    //             this.setState({
    //                 uploading: false,
    //                 images
    //             })
    //         })
    //
    // }


    render() {


        return (
            <div>
                <div className='home'>
                {/*    <input type="file" onChange={this.fileSelectHandler}/>*/}
                {/*    <button onClick={this.fileUploadHandler}>Upload</button>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src={url}/>*/}
                HOME. pages are non-functional
                </div>
            </div>
        )
    }
}

export default Home;
