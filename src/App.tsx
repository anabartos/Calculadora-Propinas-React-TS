
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, tip, setTip, addItem, removeItem , placeOrder} = useOrder()
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
             {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
            />    
          ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg space-y-10 p-3">
          {order.length ?(
            <>
            <OrderContent
          order= {order}
          removeItem={removeItem}
          />
          <TipPercentageForm
            setTip={setTip}
            tip={tip}
          />
          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
          </>
          ):(<p className="text-center">La orden está vacia</p> 
          )}        
        </div>
      </main>
    </>
  )
}

export default App
