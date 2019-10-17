let dealset = [
  {
    //0Mip-UnlimitedMileage-PayNow-FreeCancellation
    id:0,
    paymentplan: false,
    cancellation: true,
    mileage: "200",
    deal: "0"
  },
  {
    //1Mip-UnlimitedMileage-PayNow-NoFreeCancellation
    id:1,
    paymentplan: false,
    cancellation: true,
    mileage: "",
    deal: "0"
  },
  {
    //2MemberOnlyDeal-LimitedMileage-ReserveNowPaylater-FreeCancellation
    id:2,
    paymentplan: true,
    cancellation: true,
    mileage: "200",
    deal: "1"
  },
  {
    //3MemberOnlyDeal-UnlimitedMileage-PayNow-FreeCancellation
    id:3,
    paymentplan: false,
    cancellation: true,
    mileage: "",
    deal: "1"
  },
  {
    //4MemberOnlyDeal-UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    id:4,
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: "1"
  },
  {
    //5RegularOffer-UnlimitedMileage-PayNow-NoFreeCancellation
    id:5,
    paymentplan: false,
    cancellation: false,
    mileage: "",
    deal: "3"
  },
  {
    //6MobileExclusive-UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    id:6,
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: "2"
  },
  {
    //7UnlimitedMileage-PayNow-NoFreeCancellation
    id:7,
    paymentplan: false,
    cancellation: false,
    mileage: "",
    deal: null
  },

  {
    //8LimitedMileage-ReserveNowPaylater-FreeCancellation
    id:8,
    paymentplan: true,
    cancellation: true,
    mileage: "200",
    deal: null
  },
  
  {
    //9UnlimitedMileage-ReserveNowPaylater-FreeCancellation
    id:9,
    paymentplan: true,
    cancellation: true,
    mileage: "",
    deal: null
  },
  {
    //10LimitedMileage-ReserveNowPaylater-FreeCancellation
    id:10,
    paymentplan: true,
    cancellation: true,
    mileage: "400",
    deal: null
  },
];

export default dealset;
