const dasturchi = {
  ism: "Bunyod",
  yosh: 34,
  manzil: {
    viloyat: "Farg'ona",
    tuman: "Buvayda",
    qishloq: "Dodxo",
    uy: "Tong Nuri 58",
  },
  salomlashish: function () {
    console.log("Assalomu alaykum!");
  },
};

console.log(dasturchi);

console.log(typeof dasturchi);

console.log(`Dasturchi ismi: ${dasturchi.ism}`);

console.log(`Dasturchi yoshi: ${dasturchi["yosh"]}`);

console.log(`Dasturchi manzili: ${dasturchi.manzil.viloyat} viloyati`);

console.log(dasturchi.manzil);

console.log(dasturchi.salomlashish());
