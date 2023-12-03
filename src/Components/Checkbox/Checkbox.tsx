export const Checkbox = () => {
    return <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
            <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
            />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
        </label>
    </div>
}