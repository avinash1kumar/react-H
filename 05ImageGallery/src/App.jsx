import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto max-w-4xl max-h-1/12 bg-gray-100 rounded-2xl">
        <div>
          <div className="text-6xl font-semibold">
            <h1><span className="hover:text-amber-900 duration-300">Art</span> is the flower...</h1>
            <h1>
              life the green <span className="text-green-700 hover:text-fuchsia-700 duration-200">leaf</span>
            </h1>
          </div>
          <div className="max-w-4xl ml-20 mr-20 mt-6">
            <p className="text-xl">
              There is an eternal love between the water drop and the leaf. When
              you look at them,you can see that they both shine out of
              happiness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 ml-5 mr-5 pb-5">
          <div>
            <img
              className="w-50 h-60 rounded-2xl hover:opacity-80 transition-opacity duration-300 "
              src="https://plus.unsplash.com/premium_photo-1678115813820-b6edd03f2738?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-1"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl contrast-150 hover:filter-none"
              src="https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-2"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl hover:sepia-50"
              src="https://plus.unsplash.com/premium_photo-1680387642099-b1b4a2e2ea43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-3"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl "
              src="https://images.unsplash.com/photo-1648940244282-d8a7149470e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-4"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl "
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-5"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl "
              src="https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-6"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl contrast-150 hover:filter-none"
              src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-7"
            />
          </div>

          <div>
            <img
              className="w-50 h-60 rounded-2xl "
              src="https://plus.unsplash.com/premium_photo-1678115323331-9241f3d663f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#image-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
