/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a static export: no server, no runtime image optimisation.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  // Type errors used to be ignored because the generated markup produced hundreds of
  // them. They are all fixed, so the build now fails on a new one.
  typescript: { ignoreBuildErrors: false },
  devIndicators: false,
};
export default nextConfig;
