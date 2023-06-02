import { AiOutlineMail, AiFillPhone} from "react-icons/ai";

function Footer (){
    return (
        <footer className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-end">
            
            <ul className="flex flex-row gap-8 p-4">
                <p>
                    <AiOutlineMail className="text-3xl"/> handyvolunteers@gmail.com
                </p>

                <p>
                    <AiFillPhone className="text-3xl rotate-90"/> (11)4002-8922
                </p>

            </ul>
        </div>

        <div className="my-6 border-gray-200  dark:border-gray-700 lg:my-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
                <a href="https://preeminent-crepe-0fa736.netlify.app/" className="hover:underline">HandyVolunteers™
                </a>. Todos os Direitos Reservados.
            </span>
        </div>
        
    </div>
</footer>

    )
}

export default Footer;