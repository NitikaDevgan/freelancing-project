import Footer from "../Components/layout/Footer";
import Navbar from "../Components/layout/Navbar";


const Home = () => {
  return (
    <>
      <Navbar />

     <section
  id="home"
  className="relative h-screen flex items-center justify-center text-center px-6"
>
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1581093458791-9d42d30d2c2b')",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Premium <span className="text-orange-500">Iron Gates</span> &  
      Steel Fabrication
    </h1>

    <p className="text-gray-300 text-lg md:text-xl mb-8">
      Custom Designed. Durable Quality. Professional Installation.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="bg-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">
        Get a Quote
      </button>

      <button className="border border-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
        View Projects
      </button>
    </div>
  </div>
</section>

<section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 text-center">
  <h2 className="text-4xl font-bold mb-16">
    Our <span className="text-orange-500">Services</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
    {["Iron Gates", "Steel Stair Railings", "Custom Fabrication"].map(
      (service, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg border border-gray-800 p-8 rounded-2xl hover:scale-105 hover:border-orange-500 transition duration-300 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">
            {service}
          </h3>
          <p className="text-gray-400">
            High-quality workmanship using premium materials and modern
            fabrication techniques.
          </p>
        </div>
      )
    )}
  </div>
</section>


<section id="gallery" className="py-20 bg-black text-center">
  <h2 className="text-4xl font-bold mb-16">
    Recent <span className="text-orange-500">Projects</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        className="group overflow-hidden rounded-2xl shadow-lg relative"
      >
        <img
          src={`https://source.unsplash.com/600x400/?iron,gate,${item}`}
          alt="Project"
          className="group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <p className="text-white text-lg font-semibold">
            View Project
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

<section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-center px-6">
  <h2 className="text-4xl font-bold mb-8">
    Contact <span className="text-orange-500">Us</span>
  </h2>

  <p className="text-gray-400 mb-6">
    Get in touch for custom iron and steel fabrication projects.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6">
    <a
      href="tel:+91XXXXXXXXXX"
      className="bg-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
    >
      📞 Call Now
    </a>

    <a
      href="#"
      className="border border-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
    >
      📩 Send Message
    </a>
  </div>
</section>



      <Footer />
    </>
  );
};

export default Home;
