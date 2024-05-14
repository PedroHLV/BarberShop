import { format } from "date-fns";
import Image from "next/image";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import  Search  from "./_components/search";
import BookinItem from "../_components/booking-item";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Pedro!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' d 'de' MMMM",{
          locale: ptBR,
        })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>
      
      <div className="px-5 mt-6">
        <BookinItem></BookinItem>
      </div>
    </div>
  );
}