import { InputText, Template, Button } from "@/components";
import Link from 'next/link'

export default function FormularioPage() {
  return (
    <Template>
      <section className="flex flex-col items-center justify-center my-5">
        <h5 className="mt-3 mb-10 text-3xl font-extrabold tracking-tight text-gray-900">
          Nova Imagem
        </h5>
        <form>
          <div className="grid grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Name: *
            </label>
            <InputText placeholder="type the image's name" />
          </div>

          <div className="mt-5 grid grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Tags: *
            </label>
            <InputText placeholder="type the tags comma separated" />
          </div>

          <div className="mt-5 grid grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Imagem: *
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-auto h-12 w-12 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600">
                    <span>Click to upload</span>
                    <input type="file" className="sr-only" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-end gap-x-4">
            <Button style="bg-blue-500 hover:bg-blue-300" type="submit" label="Save"/>
            <Link href="/galeria">
              <Button style="bg-red-500 hover:bg-red-300" type="button" label="Cancel" />
            </Link>
          </div>
        </form>
      </section>
    </Template>
  );
}
