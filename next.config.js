const nextConfig = {
  /* config options here */
  // reactCompiler: true,
  
  output: "standalone",
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "doodleipsum.com",
        },
      ],
    },
  

};

module.exports = nextConfig;
