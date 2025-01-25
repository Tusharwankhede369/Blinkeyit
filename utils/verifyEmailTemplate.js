const verifyEmailTemplate = ({name,url})=>{
    return `
    <>
    <p>Dear ${name}</p>
    <p>Thankyou for resistering  Binkeyit</p>

    <a href=${url} style="color:white;background : #5050bf;margin-top : 10px, padding:20px, display:block">
        verify Email 
    </a>
    </>`
}
export default verifyEmailTemplate