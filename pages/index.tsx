const IndexPage = () => (
  <> 
  {/*Delete content here and add your own*/}
  <div className="break-words">
    <title>
          NextJS TS Tailwind Starter
    </title>
    <h1 className="text-5xl pt-20 pr-20 pl-20 pb-10"> 
      <div className="flex flex-row justify-center items-center pb-10">
          <a href="https://nextjs.org">
          <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" className="pr-20"></img>
          </a>
      </div>
      <strong className="items-center">
            NextJS <h1 className="text-blue-500">Typescript</h1> and <h1 className="text-green-500">TailwindCSS</h1> Starter
      </strong>
    </h1>
    <div className="flex justify-center text-2xl">
            Edit <code className="text-md pr-2 pl-2 pb-7">pages/index.tsx</code> to get started
    </div>
    <div className="flex justify-center gap-10 mb-10 text-2xl">
      <div className="bg-blue-200 rounded-xl p-5">
        <img className="pr-20"></img>
        <a href="https://nextjs.org" className="rounded-sm">Check out <strong>NextJS</strong></a>
      </div>
      <div className="bg-blue-200 rounded-xl p-5">
         <a href="https://tailwindcss.com" className="rounded-sm">Check out <strong>TailwindCSS</strong></a>
      </div>
    </div>
    <hr />
    &copy; Copyright Sysnomid <b>2020</b>
    <a href="https://github.com/Sysnomid"></a>
  </div>
  
  </>
)

export default IndexPage
