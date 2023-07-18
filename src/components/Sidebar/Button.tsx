export default function Button ({children}:any) {
    //@ts-ignore
    return  (
        <button
            className={`
            py-2 w-full text-left rounded-lg
            hover:bg-gray-200 dark:hover:bg-gray-900
            transition-colors
            `}
        >
            {children}
        </button>
    )
}