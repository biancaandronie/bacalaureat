import React, { Component } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

    const MyUploader = () => {
      // specify upload params and url for your files
      const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

      // called every time a file's `status` changes
      const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

      // receives array of files that are done uploading when submit button is clicked
      const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
      }

      return (
      <div>
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*"
        />
        <div class="container">
          <form>
            <div class="form-group">
              <label for="usr">Name:</label>
              <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd">
            </div>
          </form>
        </div>
        </div>
      )
    }


export default MyUploader;
