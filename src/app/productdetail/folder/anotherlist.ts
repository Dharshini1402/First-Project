import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AnotherList {
  constructor() {}
  list = [
    {
      id: "01",
      heading: "Harissons",
      desp:
        "Designed ergonomically, these Ergo Grip Backstraps help evenly spread the weight of the bag on both shoulders and minimizing the stress on your shoulders and back by providing a spacious lumbar support.100% Waterproof fabric in use.Elastic circumference makes it easy to adjust to different sizes giving it a snug-fit. Now you can keep your pack dry and to keep your worries away while you soak in the rains.It can easily fit a laptop up to 15.6 inches and it also has a Padded laptop cradle that protects your laptop in crowded areas.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/819SpxcUVQL._SY450_.jpg",
      price: "1,000",
      category: "College Backpack"
    },
    {
      id: "02",
      heading: "Wildcraft",
      desp:
        "Made of diamond ripstop+600D fabric,side fabric bottle holder.Compartment backpack for better organization.  Quick-grab haul-loop for the ease of carrying. Side pocket for the water bottle.  Padded back system for better comfort.Padded shoulder straps to carry the bag comfortably.",
      imageUrl:
        "https://cdn01.wildcraft.com/web-images/medium/styles/YIP6LY6SUN8/1550045475631/1.jpg",
      price: "1,350",
      category: " Travel Bag"
    },
    {
      id: "03",
      heading: "Nike",
      desp:
        "This piece has a rounded shape,adjustable shoulder straps.Nike Sportswear Elemental Backpack. Durable design features two large compartments and two external pockets for small item storage, while the padded shoulder straps offer supportive comfort.  Dual-zippered main compartment for spacious, secure storage",
      imageUrl:
        "https://images.prod.meredith.com/product/0f9e43d38ac26fd933b733ffdf428d64/1529208816305/l/nike-hayward-futura-2-0-atmosphere-grey-barelrose-backpack-bags",
      price: "1,150",
      category: " Backpack"
    },
    {
      id: "04",
      heading: "Puma",
      desp:
        "Made of Polyester,2 main compartment with multiple pocket.  Lightweight yet durable backpack/daypack for school use or everyday outings.  Main compartment with double-zipper closure; small zippered pocket on the back side (inside the pack) and padded pocket for laptop. Front zippered pocket for smaller items; Velcro-close, water-bottle pockets on both sides.  Adjustable padded shoulder straps for cushioned comfort. ",
      imageUrl:
        "https://n3.sdlcdn.com/imgs/a/k/w/Puma-White-BMW-Motorsports-Backpack-SDL242486107-1-b1ceb.JPG",
      price: "3,699",
      category: "Casual Backpack"
    }
  ];
}
