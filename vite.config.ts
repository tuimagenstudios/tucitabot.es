import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        citaExtranjeriaMadrid: "cita-previa-extranjeria-madrid/index.html",
        noHayCitasMadrid: "no-hay-citas-extranjeria-madrid/index.html",
        tieHuellasMadrid: "tie-toma-huellas-madrid/index.html",
      },
    },
  },
});
