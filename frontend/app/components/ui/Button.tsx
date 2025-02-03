type ButtonProps = {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
};

export function Button({ 
    type = "button", 
    disabled, 
    children,
    className = ""
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 
            transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
} 