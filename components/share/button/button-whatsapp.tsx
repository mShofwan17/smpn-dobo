import { Button } from "../../ui/button";

export default function ButtonWhatsappComponent() {
  return (
    <Button
      variant="outline"
      className="uppercase lg:text-4xl text-md border-4 border-green-500 lg:py-5 py-2 lg:px-5 px-2 rounded-full font-bold h-full text-start flex lg:gap-3 gap-0 items-center w-full"
    >
      <span className="py-3 px-7">langsung daftar sekarang</span>
    </Button>
  );
}
