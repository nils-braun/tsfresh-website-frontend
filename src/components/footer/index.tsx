export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto mt-8 px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a href="#" className=" no-underline hover:no-underline ">
                <span className="text-black font-bold text-2xl lg:text-4xl">
                  ts
                </span>
                <span className="text-tsfresh-green font-bold text-2xl lg:text-4xl">
                  fresh
                </span>
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                GitHub
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://github.com/blue-yonder/tsfresh/blob/main/README.md"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    Readme
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://github.com/blue-yonder/tsfresh"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    Code
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://github.com/blue-yonder/tsfresh/pulls"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Docs
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://tsfresh.readthedocs.io/en/stable/"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    Stable
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://tsfresh.readthedocs.io/en/latest/"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    Latest
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Issues
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    List
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"
                  >
                    Create
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full text-center text-gray-700 text-xs m-4">
            <p>
              Created by the{" "}
              <a className="underline" href="mailto:nilslennartbraun@gmail.com">
                tsfresh authors
              </a>
              . This work is licensed under{" "}
              <a
                className="underline"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
              >
                CC BY-SA 4.0
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
