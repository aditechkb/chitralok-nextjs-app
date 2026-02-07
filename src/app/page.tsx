import Image from "next/image";

const STATIC_PHOTOS = [
  "https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg",
  "https://images.pexels.com/photos/12517431/pexels-photo-12517431.jpeg",
  "https://images.pexels.com/photos/12636165/pexels-photo-12636165.jpeg",
  "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg",
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 1. Breadcrumbs Placeholder */}
      <nav className="text-sm font-medium text-coin-silver mb-8">
        <span className="hover:text-mango-leaf cursor-pointer">Home</span>
        <span className="mx-2">/</span>
        <span className="text-copper">Shiva</span>
      </nav>

      {/* 2. Collections Section (Folders) */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-serif text-betel-nut">Top Collections</h2>
          <button className="text-sm text-mango-leaf font-semibold border-b border-mango-leaf pb-0.5">
            See all collections
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Pooja Mandir', 'Social Media', 'Home Decor', 'Wall Art'].map((folder) => (
            <div key={folder} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-pasupu transition-all">
                <Image 
                  src={STATIC_PHOTOS[0]} 
                  alt={folder}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-betel-nut/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-medium text-sm">{folder}</p>
                  <p className="text-[10px] opacity-80">24 Photos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Photo Grid (Pinterest Format) */}
      <section>
        <h2 className="text-2xl font-serif text-betel-nut mb-6">Recent Additions</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {STATIC_PHOTOS.map((url, index) => (
            <div key={index} className="mb-4 break-inside-avoid relative group">
              <div className="rounded-xl overflow-hidden border border-kalasam-silver/30 shadow-sm hover:shadow-xl transition-shadow bg-white">
                <Image 
                  src={url} 
                  alt={`Sanatan Photo ${index}`}
                  width={500}
                  height={500}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
                {/* Conversion Point Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button className="bg-pasupu text-betel-nut px-4 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    View & Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}