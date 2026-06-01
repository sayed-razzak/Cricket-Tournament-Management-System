function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-black via-gray-950 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
