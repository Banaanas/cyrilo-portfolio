// Update URL with new Hashname

const updateHashNameURL = (hashName) => {
  // If SSR, Return (because Window is NOT defined on the Node.js Server)
  if (typeof window === "undefined") return;

  window.location.hash = hashName;
};

export default updateHashNameURL;
