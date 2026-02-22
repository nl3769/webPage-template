import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/webPage-template/", // <-- nom exact du repo GitHub
  plugins: [react()]
});