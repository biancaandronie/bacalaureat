import React, { Component } from 'react';
import DropToUpload from 'react-drop-to-upload';

class Page extends Component {
  constructor(props) {
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
    this.handleDropArrayBuffer = this.handleDropArrayBuffer.bind(this);
    this.handleDropDataURI = this.handleDropDataURI.bind(this);
  }

  handleDrop(files) {
    console.log(files.length > 0); // true
    console.log(files[0]); // true
  }

  handleDropArrayBuffer(arrayBuffers, files) {
    console.log(files.length > 0); // true
    console.log(files.length === arrayBuffers.length); // true
    console.log(files[0] instanceof File); // true
    console.log(arrayBuffers[0] instanceof ArrayBuffer); // true
  }

  handleDropDataURI(dataURIs, files) {
    console.log(files.length > 0); // true
    console.log(files.length === dataURIs.length); // true
    console.log(files[0]); // true
    console.log(dataURIs[0]); // true
    console.log(/^data:(.*);(.*),/.test(dataURIs[0])); // true
  }

  render() {
    return (

          <DropToUpload
            onDrop={ this.handleDrop }
            onDropArrayBuffer={ this.handleDropArrayBuffer }
            onDropDataURI={ this.handleDropDataURI }
          >
            Drop file here to upload
          </DropToUpload>

    );
  }
}
export default Page;