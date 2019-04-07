import React from 'react';
import axios, { post } from 'axios';

class Page extends React.Component {
    constructor(props) {
    		super(props);
    		this.state = {
    			file: null,
    		};
    		this.onFormSubmit = this.onFormSubmit.bind(this);
    		this.onChange = this.onChange.bind(this);
    		this.fileUpload = this.fileUpload.bind(this);
    	}

    onFormSubmit(e) {
        e.preventDefault();
        this.fileUpload(this.state.file);
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        this.setState({ file: e.target.files[0] });
    }

    fileUpload(file) {
    		let data = new FormData();
    		data.append('data', file);
    		const { name, course, tag, description } = this.state;
    		axios.post('http://api.bacalaureat.local/api/v1/create', { name, course, tag, description, file }, data, {
    				headers: {
    					'Content-Type': 'multipart/form-data',
    				},
    			})
    			.then(response => {
    				console.log('file upload response', response);
    			});
    	}


    render() {
        const { name, course, tag, description, data, file } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
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