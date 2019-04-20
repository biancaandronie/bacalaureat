import React from 'react';
import FileUploadProgress  from 'react-fileupload-progress';
import './adminstyle.css';

import graduate from './images/graduate6.png';
//allow react dev tools work
window.React = React;

const styles = {
    progressWrapper: {
        height: '28px',
        width: '290px',
        float:'left',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        WebkitBoxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)'
    },
    progressBar: {
        float: 'left',
        width: '0',
        height: '100%',
        fontSize: '12px',
        lineHeight: '20px',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#5cb85c',
        WebkitBoxShadow: 'inset 0 -1px 0 rgba(0,0,0,.15)',
        boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.15)',
        WebkitTransition: 'width .6s ease',
        Otransition: 'width .6s ease',
        transition: 'width .6s ease'
    },
    cancelButton: {
        WebkitAppearance: 'none',
        padding: 0,
        cursor: 'pointer',
        background: '0 0',
        border: 0,
        float: 'left',
        fontSize: '21px',
        fontWeight: 700,
        lineHeight: 1,
        color: '#000',
        textShadow: '0 1px 0 #fff',
        filter: 'alpha(opacity=20)',
        opacity: '.2',

    },

    bslabel: {
        display: 'inline-block',
        maxWidth: '100%',
        marginBottom: '5px',
        fontWeight: 700,
        color: '#b3b1bb'
    },

    bsHelp: {
        display: 'block',
        marginTop: '5px',
        marginBottom: '10px',
        color: '#737373'
    },

    bsButton: {
        padding: '1px 5px',
        fontSize: '12px',
        lineHeight: '1.5',
        borderRadius: '20px',
        color: '#fff',
        backgroundColor: '#545871',
        borderColor: '#2e6da4',
        display: 'inline-block',
        padding: '6px 12px',
        marginBottom: 0,
        fontWeight: 700,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        backgroundImage: 'none',
        border: '1px solid transparent',
        opacity: '.8'
    }
};

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
    document.body.style.backgroundColor = "#84889c";
}

    componentWillUnmount() {
    document.body.style.backgroundColor = null;
}

    formGetter(){
        return new FormData(document.getElementById('customForm'));
    }

    customFormRenderer(onSubmit){
        return (
            <form id='customForm' style={{marginBottom: '15px', marginLeft: '-26px', padding: '0 64px 0 24px'}}>
                <label style={styles.bslabel} htmlFor="videofile">Entrée de fichier</label>
                <input style={{display: 'block'}} type="file" name='videofile' id="videofile" />

                <label style={styles.bslabel} htmlFor="nom">Nom</label>
                <input className="form-control input-lg"
                    type="text"
                    name="name"
                    id="name"
                />
                <label style={styles.bslabel} htmlFor="matiere">Matière</label>
                <input className="form-control input-lg"
                    type="text"
                    name="course"
                    id="course"
                />
                <label style={styles.bslabel} htmlFor="description">Description</label>
                <input className="form-control input-lg"
                    type="text"
                    name="description"
                    id="description"
                />
                <button type="button" style={styles.bsButton} onClick={onSubmit}>Télécharger</button>
            </form>
        );
    }

    customProgressRenderer(progress, hasError, cancelHandler) {
        if (hasError || progress > -1 ) {
            let barStyle = Object.assign({}, styles.progressBar);
            barStyle.width = progress + '%';

            let message = (<span>{barStyle.width}</span>);
            if (hasError) {
                barStyle.backgroundColor = '#d9534f';
                message = (<span style={{'color': '#a94442'}}>Impossible de télécharger...</span>);
            }
            if (progress === 100){
                message = (<span >Terminé</span>);
            }

            return (
                <div>
                    <div style={styles.progressWrapper}>
                        <div style={barStyle}></div>
                    </div>
                    <button style={styles.cancelButton} onClick={cancelHandler}>
                        <span>&times;</span>
                    </button>
                    <div style={{'clear':'left', display: 'inline'}}>
                        {message}
                    </div>
                </div>
            );
        } else {
            return;
        }
    }

    render() {

    return (
        <div className="all_page_upload">
            <div className="left">
                <img src={graduate} className="graduate" alt="graduate" width="800" height="600" />
            </div>
            <div className="right">
                <h1 className="titlu_right">Panneau d'administration</h1>
            <FileUploadProgress url='http://localhost:8080/api/v1/upload'
                onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
                onLoad={ (e, request) => {console.log('load', e, request);}}
                onError={ (e, request) => {console.log('error', e, request);}}
                onAbort={ (e, request) => {console.log('abort', e, request);}}
                formGetter={this.formGetter.bind(this)}
                formRenderer={this.customFormRenderer.bind(this)}
                progressRenderer={this.customProgressRenderer.bind(this)}
            />
            </div>
        </div>
        )
    }
}

export default Test;