export default function Button ({children, active}:any) {
    //@ts-ignore
    return  (
        <button
            className={`
            py-2 w-[85%] text-left rounded-lg
            hover:bg-gray-200 dark:hover:bg-gray-900
            ${active ? 'bg-emerald-300 dark:bg-emerald-600' : "bg-gray-200 dark:bg-gray-900"}
            transition-colors
            `}
        >
            {children}
        </button>
    )
}