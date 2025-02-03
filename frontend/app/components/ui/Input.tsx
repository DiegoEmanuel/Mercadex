type InputProps = {
    label: string;
    id: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    min?: string;
    step?: string;
};

export function Input({ 
    label, 
    id, 
    type = "text", 
    value, 
    onChange, 
    placeholder,
    required,
    min,
    step
}: InputProps) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                min={min}
                step={step}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder={placeholder}
            />
        </div>
    );
} 