function Hero() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start space-y-2 lg:order-last">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              New Collection
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Spring Fashion
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fresh styles for the new season.
            </p>
            <a
              className="inline-flex h-9 items-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </a>
          </div>
          <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
