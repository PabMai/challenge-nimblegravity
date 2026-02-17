interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, type = "button" }) => {
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