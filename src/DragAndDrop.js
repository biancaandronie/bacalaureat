import React, { Component } from 'react';
import axios, { post } from 'axios';
import DropToUpload from 'react-drop-to-upload';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            file:null
        };
    }

    fileChangedHandler = event => {
      this.setState({ file: event.target.files[0] })
    }

    uploadHandler = () => {
      console.log(this.state.file);
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

       // const { name, course, tag, description, file } = this.state;
        const formData = new FormData()
          formData.append(
            this.state.name,
            this.state.course,
            this.state.tag,
            this.state.description,
            this.state.file
          )
        axios.post('http://api.bacalaureat.local/api/v1/create', formData,
                {
                onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)}
                })
            .then((result) => {
                //access the results here....
            });
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
                <button id='send' className='btn rainy-ashville-gradient rounded-circle'>Envoyer</button>
            </form>
        );
    }
}
export default Page;