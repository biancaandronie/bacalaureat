import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { Line, Circle } from 'rc-progress';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            selectedFile: null,
            files: [],
            percentCompleted: 0
        };
        this.onDrop = this.onDrop.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        const config = {
            headers: { 'Access-Control-Allow-Origin': '*' },
            onUploadProgress: function(progressEvent) {
                let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                this.setState({ percentCompleted: percentCompleted });
            }.bind(this)};
        axios.post('http://bacalaureat.local/api/v1/upload', formData,config);
        // get our form data out of state
        const { name, course, tag, description} = this.state;
        axios.post('http://bacalaureat.local/api/v1/create',
            { name, course, tag, description})
            .then((result) => {
                //access the results here....
            });
    }

    onDrop(acceptedFiles) {
        this.setState({
            files: acceptedFiles
        });
        console.log("onDrop", this.state.files);

        acceptedFiles.forEach((file)=> {
            const data = {
                name: "dora1",
                description: "dora1 description",
                picture: file
            }
            console.log("file", JSON.stringify(data));

            this.onFormSubmit(data);
        });

    }

    onOpenClick() {
        this.dropzone.open();
        console.log("onOpenClick", this.state.files);
    }

    render() {
        const { name, course, tag, description, selectedFile } = this.state;
        const progress = this.state.percentCompleted;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="file"
                    name="newfile"
                    onChange={this.fileChangedHandler} />
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
                <div className="col-md-12">
                    <div className="row">
                        <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                            <div>Try dropping some files here, or click to select files to upload.</div>
                        </Dropzone>
                        <div className="pull-left">
                            <br />
                            <button type="button" className="btn" onClick={this.onOpenClick}>
                                Open files
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <p>{progress} %</p>
                        <Line percent={progress} strokeWidth="4" strokeColor="#00ff00" />
                        {/* <Circle percent={progress} strokeWidth="4" strokeColor="#D3D3D3" /> */}
                    </div>
                </div>
            </form>
        );
    }
}
export default Admin;