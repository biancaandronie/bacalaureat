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
      <div className="upload">
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*"
        />
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="usr">Le nom:</label>
              <input type="text" className="form-control" id="usr" />
            </div>
            <div class="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
          </form>
        </div>
        </div>
      )
    }


export default MyUploader;
