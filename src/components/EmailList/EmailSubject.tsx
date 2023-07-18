import EmailCloseButton from "./EmailCloseButton"
import EmailData from "./EmailData"
import EmailTitle from "./EmailTitle"

export default function EmailSubject ({email, setOpenEmail} : any) {
    const sentDate = new Date(email.createdAt)
    const openEmailDate = `${sentDate.toLocaleDateString()}, ${sentDate.toLocaleTimeString()}`
    return  (
        <div className="
        p-2 md:p-4 absolute lg:relative h-full w-full 
        bg-gray-50 dark:bg-gray-700
        text-gray-900 dark:text-gray-50
        grow-[2] basis-96"
        >
            <EmailCloseButton onClick={() => setOpenEmail(null)} />
            <EmailTitle>{email.subject}</EmailTitle>
            <EmailData>De: {`<${email.from}>`}</EmailData>
            <EmailData>Para: {'<'}you@mailwind.com{'>'}</EmailData>
            <EmailData>Em: {openEmailDate}</EmailData>
            <hr className="my-4" />
            {email.body}
        </div>
    )
}