

const Header2 = () => {
    const list = [
        {
            name:"Mumbai"
        },
        {
            name:"Delhi"
        },
        {
            name:"Calcuta"
        },
        {
            name:"Goa"
        },
        {
            name:"Punjab"
        },
        
        

    ]
  return (
    <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {list.map((e)=>{
            return (
                <span key={1}>{e.name}</span>
            )
        })}
    </div>
  )
}

export default Header2