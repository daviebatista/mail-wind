export default function WriteButton ({children}: any) {
    return  (
        <button
            className="
                bg-emerald-300 hover:bg-emerald-500
                dark:bg-emerald-500 dark:hover:bg-emerald-600
                py-2 w-[85%] rounded-lg
                transition-colors
            "
        >
            {children}
        </button>
    )
}