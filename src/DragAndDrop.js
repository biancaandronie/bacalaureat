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

                    <button>Send data!</button>
                </div>

        </form>
    );
  }
}
export default Page;