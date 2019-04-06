import React, { Component } from 'react';
import DropToUpload from 'react-drop-to-upload';
import {VideoData} from './service/VideoData';

class Page extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      fetch('http://api.bacalaureat.local/api/v1/create', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      console.log(JSON.stringify(data));
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
                      <label htmlFor="usr">Le nom:</label>
                      <input type="text" name="name" className="form-control" id="name" />
                      <label htmlFor="des">La description:</label>
                      <input type="text" name="description" className="form-control" id="description" />
                      <label htmlFor="mot">Les mots-clés:</label>
                      <input type="text" name="tag" className="form-control" id="tag"/>
                    <button>Send data!</button>
        </form>
    );
  }
}
export default Page;