import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="font-sans text-gray-800">
      <section className="h-screen flex flex-col justify-center items-center bg-blue-100 text-center p-4">
        <h1 className="text-5xl font-bold mb-4">Ahoj, som tvoj kouč</h1>
        <p className="text-xl max-w-xl">
          Pomáham ľuďom objaviť ich potenciál, nájsť cestu a dosiahnuť rovnováhu v živote aj práci.
        </p>
      </section>

      <section className="h-screen bg-white flex flex-col justify-center items-center p-4">
        <h2 className="text-3xl font-semibold mb-2">O mne</h2>
        <p className="max-w-xl text-center">
          Som certifikovaný kouč s vášňou pre sprevádzanie ľudí na ich ceste.
        </p>
      </section>

      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        <h2 className="text-3xl font-semibold mb-2">Služby</h2>
        <ul className="list-disc text-left">
          <li>Koučing 1:1</li>
          <li>Skupinové stretnutia</li>
          <li>Online koučing</li>
        </ul>
      </section>

      <section className="h-screen bg-white flex flex-col justify-center items-center p-4 overflow-x-scroll">
        <h2 className="text-3xl font-semibold mb-4">Referencie</h2>
        <div className="flex space-x-4 w-max">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] bg-blue-200 p-4 rounded-xl shadow"
            >
              <p>"Skvelá skúsenosť, veľmi odporúčam!"</p>
              <span className="block mt-2 font-bold">Klient {i}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="h-screen bg-blue-50 flex flex-col justify-center items-center p-4">
        <h2 className="text-3xl font-semibold mb-2">Kontakt</h2>
        <p>Napíš mi na: <a className="text-blue-600 underline" href="mailto:tvoj@email.sk">tvoj@email.sk</a></p>
      </section>
    </main>
  );
}
