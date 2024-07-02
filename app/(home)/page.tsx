import { format } from "date-fns";
import Image from "next/image";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import  Search  from "./_components/search";
import BookinItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
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
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
        <BookinItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

        <div className="flex pc-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop)=>(
            <BarbershopItem key={barbershop.id} barbershop={barbershop}></BarbershopItem>
          ))}
        </div>  
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>

        <div className="flex pc-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop)=>(
            <BarbershopItem key={barbershop.id} barbershop={barbershop}></BarbershopItem>
          ))}
        </div>  
      </div>

      
    </div>
  );
}