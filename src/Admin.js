import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';


class Admin extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            selectedFiles: null

        };
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        this.setState({ [e.target.name]: e.target.value });
    }

    fileChangedHandler = event => {
        this.setState({selectedFile: event.target.files[0]})

    }

    onSubmit = selectedFiles => {
        const uploads = selectedFiles.map(selectedFile => {
        const formData = new FormData();
        formData.append(
            "newfile",
            selectedFile
        );
        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        axios.post('http://bacalaureat.local/api/v1/upload', formData,config);
        // get our form data out of state
        const { name, course, tag, description} = this.state;
        axios.post('http://bacalaureat.local/api/v1/create',
            { name, course, tag, description})
            .then((result) => {
                //access the results here....
            });
        });

        // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
        axios.all(uploads).then(() => {
            // ... do anything after successful upload. You can setState() or save the data
            console.log('Images have all being uploaded')
        });
    }

    render() {
        const { name, course, tag, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <Dropzone
                    onDrop={this.onSubmit}
                    multiple
                    accept="image/*"
                    name="newfile"
                />
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="course"
                    value={course}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Admin;