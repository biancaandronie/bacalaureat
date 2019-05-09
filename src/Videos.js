import React,{Component} from 'react';
import Search from 'react-search';
import  axios from 'axios';
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import "../node_modules/video-react/dist/video-react.css"; // import css
//@import "~video-react/styles/scss/video-react";
import { Player } from 'video-react';

class Videos extends Component {

    constructor() {
        super();

        this.state = {
            videos: [],
            name: null,
            link: null,
            course: null,
            description: null,
            redirect: false,
            id: 0

        };

    }
    componentWillMount() {
        let url = 'http://localhost:8080/api/v1/videolink'
        axios.post(url, {"id": sessionStorage.getItem('id')})
            .then((response) => {
                if (response.data != undefined) {
                    this.setState({name: response.data[0].name});
                    this.setState({id: response.data[0].id});
                    this.setState({link: response.data[0].link});
                    this.setState({course: response.data[0].course});
                   // this.setState({description: response.data[0].description});
                    let {name,id,link,course,description} = this.state;
                    console.log(`this is the link: ${link}`);
                    console.log(`this is name: ${name}`);
                    console.log(`this is id: ${id}`);
                    console.log(`this is link: ${link}`);
                    console.log(`this is course: ${course}`);
                    //console.log(`this is id: ${description}`);
                }
            });
    }

    handleItemsChange(items, id) {
        if (items.length > 0) {
            //console.log(items);
            let url = 'http://localhost:8080/api/v1/videolink'
            axios.post(url, {"id": items[0].id})
                .then((response) => {
                    if (response.data != undefined) {
                        this.setState({name: response.data[0].name});
                        this.setState({id: response.data[0].id});
                        sessionStorage.setItem('id',this.state.id);
                        this.setState({link: response.data[0].link});
                        this.setState({course: response.data[0].course});
                        this.setState({ redirect: true});
                        let {link,id} = this.state;
                        console.log(`this is the link: ${link}`);
                        console.log(`this is id: ${id}`);
                    }
                });
        }
    }


    getItemsAsync(searchValue, cb) {
        let config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        let url = 'http://localhost:8080/api/v1/video'
        axios.post(url, {"name": searchValue})
            .then((response) => {
                console.log(response.data.name);
                if (response.data != undefined) {
                    console.log(response.data);
                    let items = response.data.map((res, i) => {
                        return {id: res.id, value: res.name}
                    });
                    this.setState({videos: items});
                    cb(searchValue)
                }

            });
    }
    render() {
        const {id,link,name,course,description,redirect } = this.state;
        if (redirect) {
            const history = createHistory();
            history.push(`/videos/${sessionStorage.getItem('id')}`);
            history.go(0);
        }
    return (
        <div>
            <Search items={this.state.videos}
                    placeholder='Recherche vidéo'
                    maxSelected={1}
                    multiple={false}
                    getItemsAsync={this.getItemsAsync.bind(this)}
                    onItemsChanged={this.handleItemsChange.bind(this)}
                    onClick={this.handleItemsChange.bind(this)}
            />
            <div>
            <Player
                playsInline
                fluid={false}
                width={300}
                height={300}
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            </div>
        </div>
    );
    }
}

export default Videos;
