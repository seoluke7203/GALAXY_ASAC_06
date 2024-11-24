// NOT USED

export const BlobConverter = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl); // Fetch the image
      const blob = await response.blob(); // Convert the image to a Blob
      console.log(blob); // Log the Blob object
      return blob; // You can now use this Blob
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  

export default BlobConverter;