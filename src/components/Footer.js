
import templateConfig from "../template-config";

export default function Footer() {
  const { business } = templateConfig;
  const address = `${business.address.street}, ${business.address.suite}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-lg font-semibold">&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p className="text-sm opacity-90">{address} | {business.email} | {business.phone}</p>
      </div>
    </footer>
  );
}
