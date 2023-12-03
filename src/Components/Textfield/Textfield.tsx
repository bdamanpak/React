import React, { FC, ReactNode, useId } from "react";

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    helpertext?: ReactNode;
    validation?: any;
};

export const Textfield: FC<TextfieldProps> = ({ label, helpertext, validation, ...restProps }) => {
    const id = useId();
    return <div className="mb-5">
        {Boolean(label) && 
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">{label}</label>
        }
        <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...restProps}
            id = {id} 
            {...validation}
        />
        {Boolean(helpertext) &&
        <p className="text-xs font-small p-1 text-red-900 dark:text-white">{helpertext}</p>
        }
    </div>;
}