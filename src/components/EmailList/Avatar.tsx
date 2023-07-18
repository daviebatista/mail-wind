
export default function Avatar({letter}: any)    {
    return  (
        <div
            className="
                rounded-full bg-rose-300 dark:bg-rose-600 
                w-10 h-10 place-content-center grid
            "
        >
            <span>
                {letter}
            </span>
        </div>
    )
}