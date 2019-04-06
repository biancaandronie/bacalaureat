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
            <div className="form-group drop-down-list">
                <label htmlFor="test1">Select Person</label>
                <input id="test1" className="form-control" placeholder="Choisir une matière" />
                <span className="ddl-caret"></span>
                <ul className="dropdown-menu">
                    <li><a>Littérature</a></li>
                    <li><a>Informatique</a></li>
                    <li><a>Histoire</a></li>
                    <li><a>Géographie</a></li>
                    <li><a>Biologie végétale et animale</a></li>
                    <li><a>Anatomie et physiologie humaine</a></li>
                    <li><a>Chimie</a></li>
                    <li><a>Physique</a></li>
                    <li><a>Mathématiques</a></li>
                </ul>
            </div>
          </form>
        </div>
        </div>
      )
    }


export default MyUploader;
