declare module "*.png" {
  const content: any;
  export default content;
}

// typescript does not identify .png as a type and would later throw and error if imported in components
// so we declare in this file that images must be treated as importable items which could be called inside components 
