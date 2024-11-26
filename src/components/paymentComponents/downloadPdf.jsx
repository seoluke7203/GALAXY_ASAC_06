import { jsPDF } from "jspdf";
import { addHeader, addImage, addReservationID} from '@/components/ui/pdfTemplate'
import galaxy_logo from '@/assets/galaxy_logo.jpg'
import galaxy_image from '@/assets/galaxy_image.jpg'

export const generatePdf = (qrCode, reservId) => {
  try {
    const pdf = new jsPDF();

    addImage(pdf, galaxy_logo, 75, 10, 60, 15);
    addHeader(pdf, "Reservation Ticket", "Please present this ticket at the entrance");
    addReservationID(pdf, reservId, 80, 60);
    addImage(pdf, qrCode, 80, 80, 50, 50);

    // Error generating PDF:  Error: Incomplete or corrupt PNG file
    // addImage(pdf, galaxy_image, 10, 140, 190, 190);
    
    console.log("PDF saved!");

    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(pdfUrl);
  } catch (error) {
    console.error("Error generating PDF: ", error);
  }

  
};

export default generatePdf;
