import React, { Component} from 'react';
import Header from '../header';
import TextField from '@material-ui/core/TextField';
import './editTemplate.css'
import { set } from 'date-fns';
import { Result  } from 'antd';
import { Link } from 'react-router-dom';

import Constant from '../../constant'
 const constants = Constant()


class EditTemplate extends Component {
    constructor(props) {
    super(props);
    this.state = {
      templateId: '',
      languageId: '',
      templateName: '',
      label:'',
      breadcrumb_label:'',
      title:'',
      anchor_text :'',
      meta:'',
      textual_context: [],
      how_to_content: [],
      faq: [],
     h1:'',
     h2:'',
     h3:'',
     h4:'',
     h5:'',
     h6:'',

     submitStatus: false,
     errorStatus: false,
     submitMsg:''

    }
    this.handleTextualContextPriority = this.handleTextualContextPriority.bind(this);
    this.handleTextualContextLogoUrl =  this.handleTextualContextLogoUrl.bind(this);
    this.handleTextualContextHeader = this.handleTextualContextHeader.bind(this);
    this.handleTextualContextContent =  this.handleTextualContextContent.bind(this);
    this.addTextualContext = this.addTextualContext.bind(this);
    this.handleHowToContentLogoImageUrl = this.handleHowToContentLogoImageUrl.bind(this);
    this.handleHowToContentHeading = this.handleHowToContentHeading.bind(this);
    this.addHowToContent =  this.addHowToContent.bind(this);
    this.handleHowToContentSteps = this.handleHowToContentSteps.bind(this);
    this.addfaq =  this.addfaq.bind(this);
    this.handleFaqQuestion =  this.handleFaqQuestion.bind(this);
    this.handleFaqAnswer =  this.handleFaqAnswer.bind(this);
    this.handleLabel =  this.handleLabel.bind(this);
    this.handleBredcrumbLabel = this.handleBredcrumbLabel.bind(this);
    this.handleTitle =  this.handleTitle.bind(this);
    this.handleAnchorText = this.handleAnchorText.bind(this);
    this.handleMeta =  this.handleMeta.bind(this);
    this.handleHeading =  this.handleHeading.bind(this);
    this.submit = this.submit.bind(this);

}

    handleLabel(event){
        this.setState({
            label: event.target.value
        })

    }
    handleBredcrumbLabel(event){
        this.setState({
            breadcrumb_label : event.target.value
        })
    }
    handleTitle(event){
        this.setState({
            title: event.target.value
        })
    }
    handleAnchorText(event){
        this.setState({
            anchor_text: event.target.value
        })
    }
    handleMeta(event){
        this.setState({
            meta: event.target.value
        })
    }
    handleHeading(event){
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
  });

    }
    handleTextualContextPriority(event){
        let textual_context = [...this.state.textual_context]
         textual_context[event.target.id]['priority'] = event.target.value
        this.setState({
            textual_context
        },()=>console.log(this.state.textual_context));     
            
    }
    handleTextualContextLogoUrl(event){
        let textual_context = [...this.state.textual_context]
         textual_context[event.target.id]['logoUrl'] = event.target.value
        this.setState({
            textual_context
        },()=>console.log(this.state.textual_context));     
            
    }
    handleTextualContextHeader(event){
        let textual_context = [...this.state.textual_context]
         textual_context[event.target.id]['header'] = event.target.value
        this.setState({
            textual_context
        },()=>console.log(this.state.textual_context));     
            
    }

    handleTextualContextContent(event){
        let textual_context = [...this.state.textual_context]
         textual_context[event.target.id]['content'] = event.target.value
        this.setState({
            textual_context
        },()=>console.log(this.state.textual_context));     
            
    }

    handleHowToContentLogoImageUrl(event){
        let how_to_content = [...this.state.how_to_content]
        how_to_content[event.target.id]['logoImageUrl'] = event.target.value
       this.setState({
        how_to_content
       },()=>console.log(this.state.how_to_content));  
    }
    handleHowToContentHeading(event){
        let how_to_content = [...this.state.how_to_content]
        how_to_content[event.target.id]['heading'] = event.target.value
       this.setState({
        how_to_content
       },()=>console.log(this.state.how_to_content));  
    }
    handleHowToContentSteps(event){
        let how_to_content = [...this.state.how_to_content]
        how_to_content[event.target.id]['steps'] = event.target.value
       this.setState({
        how_to_content
       },()=>console.log(this.state.how_to_content));  
    }
    handleFaqQuestion(event){
        let faq = [...this.state.faq]
        faq[event.target.id]['question'] = event.target.value
       this.setState({
        faq
       },()=>console.log(this.state.faq));  
    }
    handleFaqAnswer(event){
        let faq = [...this.state.faq]
        faq[event.target.id]['answer'] = event.target.value
       this.setState({
        faq
       },()=>console.log(this.state.faq));  
    }
    componentDidMount(){
     this.setState({ templateId: this.props.match.params.templateId, languageId: this.props.match.params.languageId,
         templateName: this.props.match.params.templateName},()=>{ this.findTemplateData()})
        console.log(this.props.match.params)
       
    }

 addTextualContext(){
     if(this.state.textual_context){
        this.setState((prevState)=>({
            textual_context: [...prevState.textual_context,{priority:"",logoUrl:"",header:"",content:""}],
        }))
     }else{
        this.setState(()=>({
            textual_context: [{priority:"",logoUrl:"",header:"",content:""}],
        }))
     }
     
 }

 addHowToContent(){
    if(this.state.how_to_content){
        this.setState((prevState)=>({
            how_to_content: [...prevState.how_to_content,{logoImageUrl:"",heading:"",steps:['']}],
        }))
    }else{
        this.setState(()=>({
            how_to_content: [{logoImageUrl:"",heading:"",steps:['']}],
        }))
    }
   
 }

 addfaq(){
    if(this.state.faq){
        this.setState((prevState)=>({
            faq: [...prevState.faq,{question:"",answer:""}],
        }))
    }else{
        this.setState(()=>({
            faq: [{question:"",answer:""}],
        }))
    }
   
 }
 textualContext = () => {
 const dataT = this.state.textual_context;

    console.log(this.state.textual_context);
    const listDetail = dataT && dataT.map((item,index) => {
    return <div className='inputtext'>
         <div className='eachtextn' >  
         <TextField id="outlined-basic" label='Textual Contecxt: Priority' variant="outlined" 
        value={item.priority}
        id = {index}
        onChange={this.handleTextualContextPriority}
        style = { { width: "100%" } } />
        </div>
        <div className='eachtext'> 
         <TextField id="outlined-basic" label='Textual Contecxt: LogoUrl' variant="outlined" 
        value={item.logoUrl}
        id = {index}
        onChange={this.handleTextualContextLogoUrl}
        style = { { width: "100%" } } />
         </div>

         <div className='eachtext'>
         <TextField id="outlined-basic" label='Textual Contecxt: Header' variant="outlined" 
        value={item.header}
        id = {index}
        onChange={this.handleTextualContextHeader}
        style = { { width: "100%" } }/>
         </div>

         <div className='eachtext'>
         <TextField id="outlined-basic" label='Textual Contecxt: Content' variant="outlined" 
        value={item.content}
        id = {index}
        onChange={this.handleTextualContextContent}
        style = { { width: "100%" } }/>
         </div>
         
    <hr />
    </div>
    
    })
    return listDetail
 }


howToContent = () => {
    const dataT = this.state.how_to_content;
    console.log(dataT)
       
       const listDetail = dataT && dataT.map((item,index) => {
     return <div className='inputtext'>
            <div className='eachtext'>  
     <TextField id="outlined-basic" label='How To Content: logoImageUrl' variant="outlined" 
     value={item.logoImageUrl}
     id = {index}
     onChange={this.handleHowToContentLogoImageUrl}
     style = { { width: "100%" } }/>
</div>

<div className='eachtext'> 
<    TextField id="outlined-basic" label='How To Content: heading' variant="outlined" 
     value={item.heading}
     id = {index}
     onChange={this.handleHowToContentHeading}
     style = { { width: "100%" } } />
 </div>
 <div className='eachtext'>
  {item.steps.map((item,index) => {
      return <div className='eachtext'>
        < TextField id="outlined-basic" label='How To Content: steps'
           variant="outlined" 
           id = {index}
           value={item}
           onChange={this.handleHowToContentSteps}
           style = { { width: "100%" } } 
        />
          </div>
  })}
   </div>
        </div>
       })
       return listDetail
}

faq = () => {
    const dataT = this.state.faq
       console.log(dataT);
       const listDetail = dataT && dataT.map((item,index) => {
       return <div className='inputtext'>
            <div className='eachtextn'>  
            <TextField id="outlined-basic" label='question' variant="outlined" 
           value={item.question}
           id = {index}
           onChange={this.handleFaqQuestion}
           style = { { width: "100%" } } />
           </div>

           <div className='eachtext'> 
            <TextField id="outlined-basic" label='answer' variant="outlined" 
           value={item.answer}
           id = {index}
           onChange={this.handleFaqAnswer}
           style = { { width: "100%" } } />
            </div>
   
             
       <hr />
       </div>
       
       })
       return listDetail
}

    submit(){  
        const obj = [];
        if(this.state.title[0]){ 
            obj.push({"seoDataType": "TITLE","value":`${this.state.title}`})
        }
        if(this.state.meta[0]){
            obj.push({"seoDataType": "META","value":`${this.state.meta}`})
        }
        if(this.state.label[0]){ 
            obj.push({"seoDataType": "LABEL","value":`${this.state.label}`})
        }
        if(this.state.breadcrumb_label[0]){ 
            obj.push({"seoDataType": "BREADCRUMB_LABEL","value":`${this.state.breadcrumb_label}`})
        }
        if(this.state.anchor_text[0]){ 
            obj.push({"seoDataType": "ANCHOR_TEXT","value":`${this.state.anchor_text}`})
        }
        if(this.state.h1[0]){ 
            obj.push({"seoDataType": "H1","value":`${this.state.h1[0]}`})
        }
        if(this.state.h2[0]){ 
            obj.push({"seoDataType": "H2","value":`${this.state.h2[0]}`})
        }
        if(this.state.h3[0]){ 
            obj.push({"seoDataType": "H3","value":`${this.state.h3[0]}`})
        }
        if(this.state.h4[0]){ 
            obj.push({"seoDataType": "H4","value":`${this.state.h4[0]}`})
        }
        if(this.state.h5[0]){ 
            obj.push({"seoDataType": "H5","value":`${this.state.h5[0]}`})
        }
        if(this.state.h6[0]){ 
            obj.push({"seoDataType": "H6","value":`${this.state.h6[0]}`})
        }
        if(this.state.how_to_content[0]){
            obj.push({"seoDataType": "HOW_TO_CONTENT","value":JSON.stringify(this.state.how_to_content[0])})
        }
        if(this.state.textual_context){
            console.log(this.state.textual_context)
            obj.push({"seoDataType": "TEXTUAL_CONTENT","value":JSON.stringify(this.state.textual_context)})
        }
        if(this.state.faq){
            console.log(this.state.faq)
            obj.push({"seoDataType": "FAQ","value":JSON.stringify(this.state.faq)})
        }
   
        fetch(`${constants.BASE_URL_PDF_DOCTOR}/api/v1/update-seo-data?templateId=${this.state.templateId}&languageId=${this.state.languageId}&debug=true`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
            body: JSON.stringify(obj)
        })
            .then(function(response) {
        
                 if(response.status ===200){ 
                    // this.setState({ submitStatus: true })
    
                    return response.json()
                   
                 }else{
                     return("Error Occured")
                 }
            }).then((body) =>{
                
                if(body.statusCode == 200){
                  this.setState({ submitStatus: true })
                }  else{
                    this.setState({ errorStatus: true })
                }
            });

    }
    findTemplateData=()=>{ 
        var languageId = this.state.languageId;
        var templateId = this.state.templateId;
        if(languageId && templateId){
            const url = `${constants.BASE_URL_PDF_DOCTOR}/api/v1/get-seo-data?templateId=${templateId}&languageId=${languageId}`
            console.log(url);
            fetch(url)
            .then(res=>{
                if(res.ok){  
                    return res.json();     
                }else{
                    throw Error(res.statusText);
                }
            }).then((res)=>{ 
                const textual_context = JSON.parse("[" + res.data.filter(item => item.seoDataType ==="TEXTUAL_CONTENT").map((item,index) => {return item.value}) + "]");
                const textual_contextArr = textual_context[0]
                const how_to_contentArr = JSON.parse("[" + res.data.filter(item=> item.seoDataType === "HOW_TO_CONTENT").map(item =>{return item.value}) + "]")
                const faq = JSON.parse("[" + res.data.filter(item=> item.seoDataType === "FAQ").map(item =>{return item.value}) + "]")
                const faqArr = faq[0]
                
            this.setState({
                templateDetails:  res.data,
                label: res.data.filter(item => item.seoDataType === "LABEL").map((item)=>{return item.value}),
                breadcrumb_label: res.data.filter(item => item.seoDataType === "BREADCRUMB_LABEL").map((item)=>{return item.value}),
                anchor_text: res.data.filter(item => item.seoDataType ==="ANCHOR_TEXT").map((item)=>{return item.value}),
                title :  res.data.filter(item => item.seoDataType ==="TITLE").map((item)=>{return item.value}),
                meta :  res.data.filter(item => item.seoDataType ==="META").map((item)=>{return item.value}),
                h1 :  res.data.filter(item => item.seoDataType ==="H1").map((item)=>{return item.value}),
                h2:  res.data.filter(item => item.seoDataType ==="H2").map((item)=>{return item.value}),
                h3:  res.data.filter(item => item.seoDataType ==="H3").map((item)=>{return item.value}),
                h4:  res.data.filter(item => item.seoDataType ==="H4").map((item)=>{return item.value}),
                h5:  res.data.filter(item => item.seoDataType ==="H5").map((item)=>{return item.value}),
                h6:  res.data.filter(item => item.seoDataType ==="H6").map((item)=>{return item.value}),
                textual_context: textual_contextArr,
                how_to_content: how_to_contentArr,
                faq: faqArr

            

            })
    
            })
            .catch(error => console.log(error))
        }
    }
    
    render(){
  console.log(this.state.submitStatus)
        return <div>
            <Header />

<div className=''>
      <div className='row col justify-content-center  inputContainer'> 
      
   
            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="Template" variant="outlined" 
            value={this.state.templateName && this.state.templateName}
            style = { { width: "100%" } } />
            </div>


            <div className='eachField col-md-3'>
            <TextField 
            id="outlined-basic" 
            label="label" 
            value = {this.state.label}
            onChange= {this.handleLabel}
            variant="outlined"
            style = { { width: "100%" } }  />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="Breadcrumb_label" variant="outlined" 
            value={this.state.breadcrumb_label}
            onChange = {this.handleBredcrumbLabel}
            style = { { width: "100%" } } />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="Title" variant="outlined"
            value ={this.state.title}
            style = { { width: "100%" } }
            onChange = {this.handleTitle}  />
           
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="Anchor_text" variant="outlined" 
            value = {this.state.anchor_text}
            onChange = {this.handleAnchorText}
            style = { { width: "100%" } } />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="meta" variant="outlined" 
            style = { { width: "100%" } }
            value = {this.state.meta}
            onChange = {this.handleMeta} />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="H1"
            name = "h1" variant="outlined" 
            value = {this.state.h1}
            onChange = {this.handleHeading} 
            style = { { width: "100%" } } />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="H2" 
            name = "h2"variant="outlined" 
            onChange = {this.handleHeading} 
            value = {this.state.h2}
            style = { { width: "100%" } } />
            </div>


            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="H3" 
            name = "h3"variant="outlined" 
            onChange = {this.handleHeading} 
            value = {this.state.h3}
            style = { { width: "100%" } } />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="H4"
            name = "h4" variant="outlined" 
            onChange = {this.handleHeading} 
            value = {this.state.h4}
            style = { { width: "100%" } } />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="H5" 
            name = "h5"
            variant="outlined" 
            value = {this.state.h5}
            onChange = {this.handleHeading} 
            style = { { width: "100%" } } />
            </div>

            <div className='eachField col-md-3'>
            <TextField id="outlined-basic" label="H6" variant="outlined"  
            name = "h6"
            value = {this.state.h6}
            onChange = {this.handleHeading}
            style = { { width: "100%" } } />
            </div>
 
            </div>
 
  <div className='container'>


  

            <div className='col-md-12 box'>
       <h2 className='text-center'>Textual context</h2> 
    {this.textualContext()}
    <div className='text-center addmore-button'>
    <button className="add-row btn btn-info AddButton" onClick={this.addTextualContext}>Add More Textual Context</button>
    </div>
            </div>
            
            <div className='col-md-12 box'>
      <h2 className='text-center'>How to content</h2> 
    {this.howToContent()}
    <div className='text-center addmore-button'>
    <button className="add-row btn btn-info AddButton" onClick={this.addHowToContent}>Add More How To Content</button>
    </div>
            </div>

            <div className='col-md-12 box'>
            <h3 className='text-center'>FAQ</h3> 
     {this.faq()}
     <div className='text-center addmore-button container'>
     <button className="add-row btn btn-info  AddButton " onClick={this.addfaq}>Add More FAQ</button>  
     </div>      
            </div>
   </div>

</div>




<div className='container text-center submit-button'>  

{this.state.submitStatus && <div>
<Result
 
    status="success"
    title="Successfull"
    subTitle=""   
  />
  </div> }
{this.state.errorStatus && <Result
    status="error"
    title="Submission Failed"
    
   
  ></Result>}


<button className="add-row btn btn-info btn-lg submitbutton" onClick={this.submit}>Submit</button>
<Link to='/seoTemplate'><button className="add-row btn btn-info btn-lg exit-button" onClick={this.submit}>Exit</button></Link>
</div> 






            </div>
    }
}

export default EditTemplate