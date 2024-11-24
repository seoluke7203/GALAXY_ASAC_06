



export const addHeader = (pdf, title, subtitle) => {

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text(title, 80, 35); 
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.text(subtitle, 65, 45);
};

export const addImage = (pdf, qrCode, x, y, width, height) => {
  pdf.addImage(qrCode, "PNG", x, y, width, height);
};

export const addReservationID = (pdf, reservationID, x, y) => {
  pdf.text(`Reservation ID: ${reservationID}`, x, y);
}
