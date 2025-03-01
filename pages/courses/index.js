import { useRouter } from 'next/router';
import Head from "next/head";

export default function Courses() {

  const router = useRouter();

  return (
    <div className="mt-10 p-4 font-mulish">
      <Head>
        <title>Zwelar | Curso de Linguas nacionais</title>
        <meta
          name="Sobre o site"
          description="O melhor e site para aprender línguas nacionais"
        />
      </Head>
      <h2 className="text-3xl font-mulish px-10 font-semibold">Cursos disponíveis</h2>
      <div className="relative mt-5 flex flex-wrap items-center lg:justify-start gap-1 sm:justify-center">
        {/* Div Card */}
        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/tchokwe.png')]  bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Tchokwe</h2>
                <p className="font-mulish font-semibold text-sm">10.000 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm">Tshokwe povo do nordeste de Angola (províncias de Lunda Norte, Lunda Sul e Moxico), do Noroeste da Zâmbia e do Sudoeste da República Democrática do Congo (Katanga, Kasaï, alto Kwango), estimado em 1 000 000 de indivíduos...</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>

        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer  my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/kimbundu.png')] bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl  border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Kimbundu</h2>
                <p className="font-mulish font-semibold text-sm">16.500 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm">Tshokwe povo do nordeste de Angola (províncias de Lunda Norte, Lunda Sul e Moxico), do Noroeste da Zâmbia e do Sudoeste da República Democrática do Congo (Katanga, Kasaï, alto Kwango), estimado em 1 000 000 de indivíduos...</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900 " onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>

        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer  my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/kikongo.png')] bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl  border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Kikongo</h2>
                <p className="font-mulish font-semibold text-sm">11.500 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm">Congo ou quicongo é uma língua africana falada pelo povo congo nas províncias de Cabinda, do Uíge e do Zaire, no norte de Angola; e na região do baixo Congo, na República Democrática do Congo....</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>

        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer  my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/kwanyama.png')] bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl  border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Kwanyama</h2>
                <p className="font-mulish font-semibold text-sm">7.500 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm">O cuanhama é uma língua nígero-congolesa falada por cerca de 420 mil pessoas em Angola e 715 mil pessoas na Namíbia. Os seus falantes pertencem ao grupo étnico kwanyama ou cuanhama, um subgrupo do povo ovambo.....</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>

        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer  my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/Nganguela.jpg')] bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl  border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Ngangela</h2>
                <p className="font-mulish font-semibold text-sm">7.500 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm">O cuanhama é uma língua nígero-congolesa falada por cerca de 420 mil pessoas em Angola e 715 mil pessoas na Namíbia. Os seus falantes pertencem ao grupo étnico kwanyama ou cuanhama, um subgrupo do povo ovambo.....</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>
        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer  my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/nhaneka2.jpg')] bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl  border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Nhaneka (Língua em Extinção)</h2>
                <p className="font-mulish font-semibold text-sm">20.500 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm"> Traduzido do inglês-Nyaneka ou Haneca é uma língua Bantu de Angola. O dialeto Ngambwe é agora considerado uma língua distinta...</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>
        <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer  my-5">
          <div className="w-72 h-48 rounded-md bg-[url('/unbundu.jpg')] bg-cover z-10 border border-gray-300"></div>
          <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl  border border-gray-100">
            <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                <h2 className="text-green-500 text-2xl font-semibold">Unbundu</h2>
                <p className="font-mulish font-semibold text-sm">13.500 kz</p>
            </div>
            <p className="px-10 -mt-6 text-justify font-mulish text-sm">Umbundu é uma língua banta falada pelos ovimbundos, povo originário das montanhas centrais de Angola. É a língua banta mais falada em Angola...</p>
            <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
          </div>
        </div>
       

      </div>
    </div>
  );
}
