export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  export const calculateCommission = (amount, rate) => {
    return amount * (rate / 100);
  };
  
  export const getPaymentCycle = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    const startDate = new Date(year, month - 1, 25);
    const endDate = new Date(year, month, 24);
    
    return {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      paymentDate: formatDate(new Date(year, month + 1, 0)) // Last day of the current month
    };
  };
  
  export const validatePAN = (panNumber) => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panPattern.test(panNumber);
  };