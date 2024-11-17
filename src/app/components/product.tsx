export default function Product() {
  return (
    <>

      <section className="p-10 bg-blue-950" >
        <h2 className="text-3xl font-bold text-center text-white mb-6">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-blue-950">Oppp</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-blue-950">Vivo</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-blue-950">Real me</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-blue-950">Never Settele  12</h3>
          </div>
          </div>
      </section>
      </>
      );
};