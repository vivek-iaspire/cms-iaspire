import React, { Component } from 'react';
import { EditorState, convertToRaw,convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './textEditor.css';
import debounce from 'lodash/debounce';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';




class MyEditor extends Component {




  constructor(props) {
    super(props);

    this.state = {

      editorState: EditorState.createEmpty(),

    }

    const content = window.localStorage.getItem('content');

  if (content) {
    this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  } else {
    this.state.editorState = EditorState.createEmpty();
  }

  }





      onEditorStateChange: Function = (editorState) => {
          const contentState = editorState.getCurrentContent();
           console.log('content state', convertToRaw(contentState));
             this.saveContent(contentState);
        this.setState({
          editorState,
        });
      };


      saveContent = debounce((content) => {
        window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));

        fetch('/product', {
     method: 'POST',
     body: JSON.stringify({
       content: convertToRaw(content),
     }),
     headers: new Headers({
       'Content-Type': 'application/json'
     })
   })

 }, 1000)


 componentDidMount() {
     fetch('/content').then(val => val.json())
     .then(rawContent => {
       if (rawContent) {
         this.setState({ editorState: EditorState.createWithContent(convertFromRaw(rawContent)) })
       } else {
         this.setState({ editorState: EditorState.createEmpty() });
       }
     });
   }

      render() {


           return (
             <Editor
             placeholder='PLEASE WRITE HERE'
               editorState={this.state.editorState}

                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={this.onEditorStateChange}


               toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true }
               }}
             />
           )
      }


}
export default MyEditor;
