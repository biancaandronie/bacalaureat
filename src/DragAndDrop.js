import React, { Component } from 'react';
import DropToUpload from 'react-drop-to-upload';
import {VideoData} from './service/VideoData';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
          data: '',
          name: '',
          course: '',
          description: '',
          tags: ''
        }
    this.handleDrop = this.handleDrop.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
      if(this.state.data && this.state.name && this.state.course && this.state.tags){
          VideoData('submit',this.state).then((result) => {
          let responseJson = result;
          console.log(responseJson);
          if(responseJson.videoData){
              sessionStorage.setItem('videoData',JSON.stringify(responseJson));
              console.log("Data sent successful");
              }
          });
      }
  }



  handleDrop(files) {
    var data = new FormData();

    files.forEach((file, index) => {
      data.append('file' + index, file);
    });

    fetch('/upload', {
      method: 'POST',
      body: data
    });
  }

  render() {
    return (
        <div className="container">

              <DropToUpload
                onDrop={ this.handleDrop }
              >
                Drop file here to upload
              </DropToUpload>

                <form>
                    <div className="form-group">
                      <label htmlFor="usr">Le nom:</label>
                      <input type="text" className="form-control" id="usr" />
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

                    <div className="form-group">
                      <label htmlFor="des">La description:</label>
                      <input type="text" className="form-control" id="des" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mot">Les mots-clés:</label>
                      <input type="text" className="form-control" id="mot" />
                    </div>

                    <button id='send' className='btn rainy-ashville-gradient rounded-circle' onClick={this.submit}>Envoyer</button>

                </form>
        </div>
    );
  }
}
export default Page;