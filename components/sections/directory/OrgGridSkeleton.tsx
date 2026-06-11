export default function OrgGridSkeleton() {
  return (
    <section className="bg-[#F0F4FB] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4">
          <div className="w-full h-14 bg-white rounded-lg animate-pulse" />
          <div className="flex gap-4">
            <div className="w-52 h-10 bg-white rounded-lg animate-pulse" />
            <div className="w-48 h-4 bg-white rounded animate-pulse self-center" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 h-48 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
