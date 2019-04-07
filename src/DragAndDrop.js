import React, { Component } from 'react';
import axios, { post } from 'axios';
import DropToUpload from 'react-drop-to-upload';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        //this.setState({ [e.target.name]: e.target.value });
        const file = e.target.files[0];
        this.setState(() => ({ file: e.target.files[0] }));
    }

    onSubmit = (e) => {
        e.preventDefault(); // Stop form submit

        const { name, course, tag, description, file } = this.state;

        const url = 'http://api.bacalaureat.local/api/v1/create';

        axios.post(url, { name, course, tag, description, file }
//                { headers: {
//                    'content-type': 'multipart/form-data'
//                }}

        )
            .then((result) => {
                //access the results here....
            });

        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config);

    }

    render() {
        const { name, course, tag, description, data, file } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input type="file" name="file" onChange={this.onChange} />
                <label htmlFor="name">Le nom:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <select name="course" value={course} onChange={this.onChange}>
                  <option selected>Choisir une matière</option>
                  <option value="littérature">Littérature</option>
                  <option value="informatique">Informatique</option>
                  <option value="histoire">Histoire</option>
                  <option value="géographie">Géographie</option>
                  <option value="biologie">Biologie végétale et animale</option>
                  <option value="anatomie">Anatomie et physiologie humaine</option>
                  <option value="chimie">Chimie</option>
                  <option value="physique">Physique</option>
                  <option value="mathématiques">Mathématiques</option>
                </select>
                <label htmlFor="description">La description:</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                />
                <label htmlFor="tag">Les mots-clés:</label>
                <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.onChange}
                />
                <button type="submit">Upload</button>
            </form>
        );
    }
}
export default Page;