import React, { Component } from 'react';

class MyForm extends Component {
  constructor() {
    super();
    this.postData = this.postData.bind(this);
  }

   function postData(event){
              event.preventDefault();

              let name = document.getElementById('name').value;
              let course = document.getElementById('course').value;
              let course = document.getElementById('tag').value;

              fetch('http://api.bacalaureat.local/api/v1/create', {
                  method: 'POST',
                  headers : new Headers(),
                  body:JSON.stringify({name:name, course:course, tag:[tag]})
              }).then((res) => res.json())
              .then((data) =>  console.log(data))
              .catch((err)=>console.log(err))
          }

  render() {
    return (
      <form  id="postData">
              <div>
                  <input type="text" name="" id="name">
              </div>
              <div>
                  <textarea name="" id="course" cols="20" rows="5"></textarea>
              </div>
              <div>
                                <textarea name="" id="tag" cols="20" rows="5"></textarea>
              </div>
              <input type="submit" value="SEND POST">
          </form>
    );
  }
}
export default MyForm;