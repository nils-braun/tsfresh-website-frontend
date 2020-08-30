function Statistics({ children }) {
  return (
    <p data-aos="zoom-in" className="w-full md:w-1/3 p-5 font-bold text-white text-xl">
      {children}
    </p>
  );
}

export default function UsedIn() {
  return (
    <section className="bg-gray-700 p-5 w-full mx-auto text-center">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Statistics>
          <a
            className="hover:underline"
            href="https://scholar.google.com/scholar?cites=365611925060572663&as_sdt=2005&sciodt=0,5&hl=de"
          >
            &gt; 150 paper citations
          </a>
        </Statistics>
        <Statistics>
          <a
            className="hover:underline"
            href="https://github.com/blue-yonder/tsfresh"
          >
            &gt; 4k stars on github
          </a>
        </Statistics>
        <Statistics>
          <a
            className="hover:underline"
            href="https://pepy.tech/project/tsfresh"
          >
            &gt; 2M downloads
          </a>
        </Statistics>
      </div>
    </section>
  );
}
