import React, { Component } from 'react';
import axios from 'axios';
import FileUploadProgress  from 'react-fileupload-progress';

class Admin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Default style</h3>
                <FileUploadProgress key='ex1' url='http://localhost:3000/api/upload'
                                    onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
                                    onLoad={ (e, request) => {console.log('load', e, request);}}
                                    onError={ (e, request) => {console.log('error', e, request);}}
                                    onAbort={ (e, request) => {console.log('abort', e, request);}}
                />
            </div>
        )
    }
};
export default Admin;