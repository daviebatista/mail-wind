import emails from "../../emails.json"
import EmailListItem from './EmailListItem'

// eslint-disable-next-line react/prop-types
function EmailList ({ setOpenEmail }: any){

    return (
        <div className="relative overflow-y-scroll grow-[1]">
        {emails.map(email => (
            <EmailListItem 
            email={email}
            key={email.id} onClick={()=> setOpenEmail(email)}>{email.subject}</EmailListItem>
        ))}
        </div>
    )
}

export default EmailList