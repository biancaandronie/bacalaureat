import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            selectedFile: null

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

    fileChangedHandler = event => {
        this.setState({selectedFile: event.target.files[0]})

    }

    const obj = {
    hello: "world"
};
    const json = JSON.stringify(obj);
    const blob = new Blob([json], {
    type: 'application/json'
});
    const data = new FormData();
    data.append("document", blob);
    axios({
              method: 'post',
              url: '/sample',
              data: data,
          })


    onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            'newfile',
            this.state.selectedFile,
            this.state.selectedFile.name,
        );
        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        const { name, course, tag, description } = this.state;
        const json = { name, course, tag, description };
        const blob = new Blob([json], {
            type: 'application/json'
        });
        formData.append("meta", blob);
        axios.post('http://localhost:8080/api/v1/create',
            { name, course, tag, description })
            .then((result) => {
                //access the results here....
            });
        axios.post('http://localhost:8080/api/v1/upload', formData,config);
    }

    render() {
        const { name, course, tag, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="file"
                    name="newfile"
                    onChange={this.fileChangedHandler} />
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="course"
                    value={course}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Test;