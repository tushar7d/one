let dealset = [
  {
    //0Mip-UnlimitedMileage-PayNow-FreeCancellation
    paymentplan: false,
    cancellation: true,
    mileage: "200",
    deal: "0"
  },
  {
    //1Mip-UnlimitedMileage-PayNow-NoFreeCancellation
    paymentplan: false,
    cancellation: true,
    mileage: "",
    deal: "0"
  },
  {
    //2MemberOnlyDeal-LimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "200",
    deal: "1"
  },
  {
    //3MemberOnlyDeal-UnlimitedMileage-PayNow-FreeCancellation
    paymentplan: false,
    cancellation: true,
    mileage: "",
    deal: "1"
  },
  {
    //4MemberOnlyDeal-UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: "1"
  },
  {
    //5RegularOffer-UnlimitedMileage-PayNow-NoFreeCancellation
    paymentplan: false,
    cancellation: false,
    mileage: "",
    deal: "3"
  },
  {
    //6MobileExclusive-UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: "2"
  },
  {
    //7UnlimitedMileage-PayNow-NoFreeCancellation
    paymentplan: false,
    cancellation: false,
    mileage: "",
    deal: null
  },

  {
    //8LimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "200",
    deal: null
  },
  
  {
    //9UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: null
  },
  {
    //10LimitedMileage-ReserveNowPaylater-FreeCancellation
    paymentplan: true,
    cancellation: true,
    mileage: "400",
    deal: null
  },
];

export default dealset;
