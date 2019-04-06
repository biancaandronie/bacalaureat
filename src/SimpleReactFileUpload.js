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
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div>
                <select className="browser-default custom-select">
                  <option selected>Choisir une matière</option>
                  <option value="1">Littérature</option>
                  <option value="2">Informatique</option>
                  <option value="3">Histoire</option>
                  <option value="4">Géographie</option>
                  <option value="5">Biologie végétale et animale</option>
                  <option value="6">Anatomie et physiologie humaine</option>
                  <option value="7">Chimie</option>
                  <option value="8">Physique</option>
                  <option value="9">Mathématiques</option>
                </select>
            </div>
          </form>
        </div>
        </div>
      )
    }


export default MyUploader;
