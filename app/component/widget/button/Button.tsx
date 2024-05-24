import { ReactNode } from "react";

interface tsLocal {
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}
const Button = (props: tsLocal) => {
    const disabled = props.disabled || props.loading;

    return (
        <button
            className={`
                ${props.className || ''}
                mx-auto block px-8 py-5 rounded-lg transitionA w-full md:max-w-[300px]
                ${
                    disabled ? 
                    'cursor-not-allowed bg-greenB' : 
                    'bg-blackA text-white'
                } 
            `}
            disabled={disabled}
            onClick={props.onClick}
        >
            {
            props.loading ?
            <svg className="mx-auto animate-spin fill-white w-[24px] h-[24px]" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
            </svg>
            :
            props.children
        }
        </button>
    );
}

export default Button;