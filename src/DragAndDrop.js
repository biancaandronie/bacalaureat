import React, { Component } from 'react';
import axios from 'axios';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: ''
        };
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
        // get our form data out of state
        const { name, course, tag, description } = this.state;

        axios.post('http://api.bacalaureat.local/api/v1/create', { name, course, tag, description })
            .then((result) => {
                //access the results here....
            });
    }

    render() {
        const { name, course, tag, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="name">Le nom:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <select name="course" value={course} onChange={this.onChange}>
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