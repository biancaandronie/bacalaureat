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
//        this.fileUpload = this.fileUpload.bind(this);
//        this.onChange = this.onChange.bind(this);
//        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        this.setState({ [e.target.name]: e.target.value });
    }

function postVideoDetails(){
  const { name, course, tag, description, file } = this.state;
  return axios.post('http://api.bacalaureat.local/api/v1/create',
                     { name, course, tag, description }
                            );
}

function postVideoFile(){
  const { name, course, tag, description, file } = this.state;
  return axios.post('http://api.bacalaureat.local/api/v1/create',
                                { file },
                                    {
                                    headers: {
                                        'content-type': 'multipart/form-data'
                                        }
                                    }

                            );
}




    onSubmit = (e) => {
        e.preventDefault();

        const { name, course, tag, description, file } = this.state;

        axios.all([postVideoDetails(),postVideoFile()])
        .then(axios.spread(function (pvd, pvf) {
            // Both requests are now complete
          }));
//        .then((result) => {
//                //access the results here....
//            });
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