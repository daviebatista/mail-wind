
export default function Logo()    {

    return  (
        <span 
            className="
                text-2xl font-bold uppercase xl:text-3xl
                text-gray-900 dark:text-gray-50
                "
        >
            <img 
                className="
                    hover:translate-x-0.5
                    cursor-pointer
                    transition-all
                "
                src="/mailwind-logo.png" 
                alt="mailwind"
                height={38}
                width={38}
            />
        </span>
    )
}