



export default function List({blockchaingames}) {
  return (
    <section className="grid grid-cols-2 gap-4 mb-5">
      { blockchaingames.map(game =>
        <div
          key={game.id}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={game.coverImage}
                alt={game.title}
              />
            </div>
            <div className="p-8">
              <div
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {game.type}
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {game.title}
              </a>
              <p
                className="mt-2 text-gray-500">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}