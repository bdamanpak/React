import React from 'react';
interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children?: any;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children}) => {
    return (
        <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={onClick} 
        >
            {children}
        </button>
    );
};
