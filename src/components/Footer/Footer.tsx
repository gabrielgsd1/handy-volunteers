import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-custom-dark-green py-8 px-4">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-2">
        <div className="border-gray-200 dark:border-gray-700">
          <span className="text-custom-white block text-base text-center">
            © 2023{" "}
            <a
              href="https://preeminent-crepe-0fa736.netlify.app/"
              className="hover:underline"
            >
              HandyVolunteers™
            </a>
            . Todos os Direitos Reservados.
          </span>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <p className="flex gap-2 items-center">
            <AiOutlineMail className="text-3xl" /> handyvolunteers@gmail.com
          </p>

          <p className="flex gap-2 items-center">
            <AiFillPhone className="text-3xl rotate-90" /> (11)4002-8922
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
