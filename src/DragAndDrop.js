import React, { Component } from 'react';
import DropToUpload from 'react-drop-to-upload';
import {VideoData} from './service/VideoData';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
          name: '',
          course: '',
          tags: ''
        }
    this.handleDrop = this.handleDrop.bind(this);
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  submit() {
    console.log("cacat");
      if(this.state.name && this.state.course && this.state.tags){
          VideoData('submit',this.state).then((result) => {
          let responseJson = result;
          console.log(responseJson);
          if(responseJson.videoData){
              sessionStorage.setItem('videoData',JSON.stringify(responseJson));
              console.log("Data sent successful");
              }
              else
              {
              console.log('Data failed');
              }
          });
      }
  }

  onChange(e) {
    console.log("onchange");
    this.setState({[e.target.name]:e.target.value});
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

                <div className="row" id="Body">
                 <div className="logare2">
                    <div className="form-group">
                      <label htmlFor="usr">Le nom:</label>
                      <input type="text" name="name" className="form-control" id="usr" onChange={this.onChange} />
                    </div>



                    <div className="form-group">
                      <label htmlFor="des">La description:</label>
                      <input type="text" name="description" className="form-control" id="des" onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mot">Les mots-clés:</label>
                      <input type="text" name="tags" className="form-control" id="mot" onChange={this.onChange} />
                    </div>

                    <input className='btn winter-neva-gradient rounded-circle' type="submit" value="Envoyer" onClick={this.submit}/>

                </div>
             </div>
        </div>
    );
  }
}
export default Page;