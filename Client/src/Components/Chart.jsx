// ChartGallery.jsx
import { motion } from "framer-motion";
import chartImg1 from '../assets/chartmakerimg1.png';
import chartImg2 from '../assets/chartmakerimg2.png';

const charts = [
  {
    title: "3D Surface Chart",
    type: "Advanced Visualization",
    image: chartImg1,
  },
  {
    title: "Sales Bar Chart",
    type: "Dynamic Data View",
    image: chartImg2,
  },
];

const ChartGallery = () => {
  return (
    <section
      className="py-20 px-5 sm:px-10"
      id="chart-gallery"
      style={{
        background:
          "linear-gradient(90deg, rgba(72, 30, 223, 0.48) 0%, rgba(211, 195, 247, 0) 50%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chart Gallery
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Visualize your uploaded Excel data with stunning charts — from simple bar graphs to complex 3D visuals.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-10">
          {charts.map((chart, index) => (
            <motion.div
              key={index}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-56 bg-white flex items-center justify-center border-b border-gray-100 relative">
                <img
                  src={chart.image}
                  alt={chart.title}
                  className="h-44 object-contain"
                />
                <motion.button
                  className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Click Me
                </motion.button>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{chart.title}</h3>
                <p className="text-sm text-gray-600">{chart.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChartGallery;
