import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            selectedFile: null

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

    onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
         formData.append(
             'newfile',
             this.state.selectedFile,
             this.state.selectedFile.name
         )
        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        axios.post('http://bacalaureat.local/api/v1/upload', formData,config);
        // get our form data out of state
        const { name, course, tag, description} = this.state;
        axios.post('http://bacalaureat.local/api/v1/create',
                   { name, course, tag, description})
            .then((result) => {
                //access the results here....
            });



    }

    onFileLoad = (e) => {
        //Get current selected or dropped file (it gives you the ability to load multiple images).
        const file = e.currentTarget.files[0];
        //Create instance
        let fileReader = new FileReader();
        //Register event listeners
        fileReader.onload = () => {
            console.log("IMAGE LOADED: ", fileReader.result);
        }
        //Operation Aborted
        fileReader.onabort = () => {
            alert("Reading Aborted");
        }
        //Error when loading
        fileReader.onerror = () => {
            alert("Reading ERROR!");
        }
        //Read the file as a Data URL (which gonna give you a base64 encoded image data)
        fileReader.readAsDataURL(file);
    }

    render() {
        const { name, course, tag, description, selectedFile } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="file"
                    name="newfile"
                    onChange={this.fileChangedHandler}
                    onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onDrop={this.onFileLoad.bind(this)}
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