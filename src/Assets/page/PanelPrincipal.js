import Card from "../Components/Card/card";
export default function PanelPrincipal() {
    return (
      
 
           
           
<div className="grid grid-cols-12 grid-rows-12 gap-4">

    {/* 4 tarjetas de arriba */}
    <div className="col-span-3"><Card/></div>
    <div className="col-span-3 col-start-4"><Card/></div>
    <div className="col-span-3 col-start-7"><Card/></div>
    <div className="col-span-3 col-start-10"><Card/></div>

    {/* TARJETA GRANDE FILA 2 (debe llegar casi hasta la derecha) */}
    <div className="col-span-9 row-span-2 row-start-0">
        <Card/>
    </div>

    {/* TARJETA GRANDE FILA 3 (misma anchura que la de arriba) */}
    <div className="col-span-9 row-span-2 row-start-0">
        <Card/>
    </div>

    {/* TARJETA DERECHA (debe llegar DESDE fila 2 hasta abajo) */}
    <div className="col-span-3 row-span-4 col-start-10 row-start-2">
        <Card/>
    </div>

</div>

    
       
    );
}
 