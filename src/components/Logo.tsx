
export default function Logo()    {

    return  (
        <span 
            className="
                text-2xl font-bold uppercase xl:text-3xl
                text-zinc-900 dark:text-zinc-50
                "
        >
            <img 
                src="/mailwind-logo.png" 
                alt="mailwind"
                height={38}
                width={38}
            />
        </span>
    )
}