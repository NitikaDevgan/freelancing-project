import Footer from "../Components/layout/Footer";
import Navbar from "../Components/layout/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <Navbar />

      {/* HERO */}
     <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6"
>
  {/* Background Image */}
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
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-6xl mx-auto text-center"
  >
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Premium <span className="text-orange-500">Iron Gates</span> &
      <br />
      Steel Fabrication
    </h1>

    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
      Custom designed iron gates, stair railings, and fabrication with
      durability & professional finishing.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition">
        Get a Quote
      </button>

      <button className="border border-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition">
        View Projects
      </button>
    </div>
  </motion.div>
</section>

      {/* SERVICES */}
      <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
 id="services" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Iron Gates",
              "Steel Stair Railings",
              "Custom Fabrication",
            ].map((service, index) => (
              <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
               
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-orange-500 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-orange-500">
                  {service}
                </h3>
                <p className="text-gray-400">
                  High-quality workmanship using premium materials and modern
                  fabrication techniques.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* GALLERY PREVIEW */}
      <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }} id="gallery" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            Recent <span className="text-orange-500">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[1, 2, 3].map((item, index) => (
    <motion.div
      key={item}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl group border border-gray-800"
    >
      <img
        src={`https://source.unsplash.com/600x400/?iron,gate,${item}`}
        alt="Project"
        className="group-hover:scale-110 transition duration-500"
      />
    </motion.div>
  ))}
</div>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
 id="contact" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Contact <span className="text-orange-500">Us</span>
          </h2>

          <p className="text-gray-400 mb-8">
            Call us today for custom fabrication and premium metal work.
          </p>

          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full font-semibold transition"
          >
            📞 Call Now
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
