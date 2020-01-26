 const  c = () => {
    const url = window.location.origin;
    if(url === 'https://cms.iaspire.tech'){
       return  {
            "BASE_URL_PDF_DOCTOR": "https://seo.pdf.net"
        }
    }
    else{
      return  {
            "BASE_URL_PDF_DOCTOR": "https://staging-seo.iaspire.tech"
        }
    }
}

export default c;