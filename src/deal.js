let dealset = [
{
    //UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: null,
    
  },
  {
    //MobileExclusive-UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: "2",
    
  },
  {
    //MemberOnlyDeal-UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: "1",
    
  },
  {
    //LimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "200",
    deal: null,
    
  },
  {
    //MemberOnlyDeal-LimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "200",
    deal: "1",
    
  },


  {
    //UnlimitedMileage-PayNow-NoFreeCancellation
    paymentplan: false,
    cancellation: false,
    mileage: "",
    deal: null,
    
  },
  {
    //RegularOffer-UnlimitedMileage-PayNow-NoFreeCancellation
    paymentplan: false,
    cancellation: false,
    mileage: "",
    deal: "3",
    
  },
  {
    //MemberOnlyDeal-UnlimitedMileage-PayNow-FreeCancellation
    paymentplan: false,
    cancellation: true,
    mileage: "",
    deal: "1",
    
  },
  {
    //Mip-UnlimitedMileage-PayNow-FreeCancellation
    paymentplan: false,
    cancellation: true,
    mileage: "200",
    deal: "0",
    
  },
  {
    //Mip-UnlimitedMileage-PayNow-NoFreeCancellation
    paymentplan: false,
    cancellation: true,
    mileage: "",
    deal: "0",
    
  },   
];

export default dealset;
