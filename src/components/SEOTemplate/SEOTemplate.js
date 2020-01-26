import React,{Component} from 'react';
import Header from '../header'
//import {getDomain}from '../../action/seoTemplate';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import './SEOTemplate.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import JSONPretty from 'react-json-pretty';
import Constant from '../../constant'
 const constants = Constant()

 

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  

class SEOTempalte extends Component{

state = {
        domainList: null,
        languageList: null,
        templateList: null,
        languageId: null,
        templateId: null,
        templateName: '',
        templateDetails: null,
        seoMetDataStatus: false
 }

    componentDidMount(){
        this.getDomain();
        this.getLanguage();
        this.getTemplate();

  
    }
    handleLanguage = (event,value) => { 
        if(value){
            this.setState({ languageId:value.id });
        }
       
      };
      
    handleTemplate = (event,value) => { 
        if(value){ 
            this.setState({ templateId:value.id ,templateName : value.name});
        }
        
      };
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
            this.setState({
                templateDetails:  res.data
            })
    
            })
            .catch(error => console.log(error))
        }
    }

    render(){
       
        // const{templateId,languageId}= this.state;
   
    console.log(this.state.templateDetails)
        console.log(typeof this.state.templateDetails)
        return(<div>
            <Header/>
              <div className='container'>
                  <div className='row col justify-content-center'>
                     {this.state.domainList && this.gridList()}
                  </div>
             </div>
         
        {this.state.seoMetDataStatus && <div className='container row justify-content-center'>
         <Autocomplete
            id="combo-box-demo"
            options={this.state.languageList}
            getOptionLabel={option => option.name}
            style={{ width: 300, margin: 10 }}
            renderInput={params => (
                <TextField {...params} label="Language" variant="outlined" fullWidth />
            )}
            //onChange={(event, value) => console.log(value)}
            onChange ={this.handleLanguage}
            />
            <Autocomplete
            id="combo-box-demo"
            options={this.state.templateList}
            getOptionLabel={option => option.name}
            style={{ width: 300, margin:10}}
            renderInput={params => (
                <TextField {...params} label="Template" variant="outlined" fullWidth />
            )}
            onChange ={this.handleTemplate}
            />
            <Button 
            style={{ margin: 10, backgroundColor: "#17a2b8", color: "white"}}
            variant="outlined" 
            color="primary"
            onClick ={this.findTemplateData}
            >
            Search
            </Button>
   
            {this.state.templateDetails && <Link to={`editTemplate/${this.state.templateId}/${this.state.languageId}/${this.state.templateName}`}>
            <Button 
            style={{ margin: 10, height: "70%",backgroundColor: "#17a2b8", color: "white"}}
            variant="outlined" 
            color="primary"
            onClick ={this.findTemplateData}
            >
            Edit
            </Button> </Link>}
           
            </div>}
            <div className='container'>
            {this.state.templateDetails && <TableContainer component={Paper}>
                    <Table className={useStyles} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>SEO Data</StyledTableCell>
                            <StyledTableCell>Values</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.templateDetails.map(row => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.seoDataType}
                            </StyledTableCell>
                            <StyledTableCell align="left"><JSONPretty id="json-pretty" data={row.value}></JSONPretty></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                edit
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>}
            </div>
        </div>
        
        )}


    getDomain = () => { 
        fetch(`${constants.BASE_URL_PDF_DOCTOR}/v1/domain`)
        .then(res=>{
            if(res.ok){  
                return res.json();     
            }else{
                throw Error(res.statusText);
            }
        }).then((res)=>{ 
        this.setState({
            domainList:  res.data.content
        })

        })
        .catch(error => console.log(error))
    
    }

    getLanguage = () =>{
        fetch(`${constants.BASE_URL_PDF_DOCTOR}/v1/language?sort=priority,-active,id`)
        .then(res=>{
            if(res.ok){
                return res.json();
            }else{
                throw Error(res.statusText);
            }
        }).then((res)=>{
            this.setState({
                languageList: res.data.content
            })
        }).catch(error => console.log(error))
    }

    getTemplate = () =>{
        fetch(`${constants.BASE_URL_PDF_DOCTOR}/v1/template`)
        .then(res=>{
            if(res.ok){
                return res.json();
            }else{
                throw Error(res.statusText);
            }
        }).then((res)=>{
            this.setState({
                templateList : res.data.content
            })
        }).catch(error => console.log(error))
    }

    getSeoMetaData = () =>{
        this.setState({ seoMetDataStatus: true })
 
    }
    
    gridList =()=>{
        const list = this.state.domainList;
         if(list){
            const gridDetail = list.map((item)=>{
              return <div className='card col-md-2 gridStyle btn' onClick={this.getSeoMetaData}  >
                     {item.name}        
                    </div>    
                })
                return gridDetail
         }
        else{
            return false
        }
    }
}

export default SEOTempalte;