import Avatar from "./Avatar";

export default function EmailListItem   ({onClick, email}: any)  {

    return  (
        <article
            className="
                flex items-center gap-4 p-2 [&+article]:mt-2
                hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900
                transition-colors rounded-lg
            "
            onClick={onClick}
        >
            <Avatar letter={email.from[0]}/>
            <div className="grow shrink basis-40">
                <strong>{email.subject}</strong>
                <p>{email.body.length > 64 ? email.body.slice(0, 64) + '...' : email.body}</p>
            </div>
        </article>
    )
}