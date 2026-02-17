interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({ text, onClick, disabled = false, type = "button" }: ButtonProps) {
    return (
        <button
            className={`px-4 py-2 btn-primary ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {text}
        </button>
    );
}