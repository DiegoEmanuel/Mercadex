type TextAreaProps = {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
};

export function TextArea({ 
    label, 
    id, 
    value, 
    onChange, 
    placeholder,
    required,
    rows = 3
}: TextAreaProps) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-600 mb-2">
                {label}
            </label>
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder={placeholder}
            />
        </div>
    );
} 