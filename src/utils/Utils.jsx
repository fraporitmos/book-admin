export const formatDate = (date) => {
    return new Date(date).toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
};

export function getMonth() {
    const today = new Date();
    const monthIndex = today.getMonth(); 
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return monthNames[monthIndex]; 
}

export function getMonthString(dateString) {
   const date  =  new Date(dateString)
   const month  = date.getMonth() + 1
   return month
}


export const calculateIncomeMonth = (orders) =>{
    var totalIncome = 0
    const today  =  new Date()
    const todayMonth = today.getMonth() + 1

    const ordersByCurrentMonth =  orders.filter( order => getMonthString(order.paymentDate) === todayMonth )

    ordersByCurrentMonth.forEach( order => {
        totalIncome += parseFloat(order.valuePayment)
    })

    return totalIncome.toFixed(2);
}


export const calculateOrdersMonth = (orders) =>{
    const today  =  new Date()
    const todayMonth = today.getMonth() + 1

    const ordersByCurrentMonth =  orders.filter( order => getMonthString(order.paymentDate) === todayMonth )

    return ordersByCurrentMonth.length
}