/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var Cantidad;
 	var PrecioBruto;
 	var PrecioConDescuento;
 	var Marca;

 	Cantidad=document.getElementById('Cantidad').value;
 	Marca=document.getElementById('Marca').value;
	PrecioBruto=Cantidad*35;

 

 	if(Cantidad>5)
 	{
 		PrecioConDescuento=PrecioBruto*0.50;
 	}
 	else
 	{
 		if(Cantidad==5)
 		{
 			{
 				if(Marca=="ArgentinaLuz")
 				{
 					PrecioConDescuento=PrecioBruto*0.60;
 				}
 				else
 				{
 					PrecioConDescuento=PrecioBruto*0.70;
 				}

 			}
 		}
 		else
 		{
 			if(Cantidad==4)
 			{
 				if(Marca=="ArgentinaLuz"||Marca=="FelipeLamparas")
 				{
 					PrecioConDescuento=PrecioBruto*0.75;
 				}
 				else
 				{
 					PrecioConDescuento=PrecioBruto*0.80;
 				}
 			}
 		}
 		if(Cantidad==3)
 		{
 			if(Marca=="ArgentinaLuz")
 			{
 				PrecioConDescuento=PrecioBruto*0.85;
 			}
 			else
 			{
 				if(Marca=="FelipeLamparas")
 				{
 					PrecioConDescuento=PrecioBruto*0.90;
 				}
 				else
 				{
 					PrecioConDescuento=PrecioBruto*0.95;
 				}
 			}
 		}
 		
 	}
 	document.getElementById('precioDescuento').value=PrecioConDescuento;
}
//Falta la E,probar hacerlo solo con if,solo con switch,con if y switch,y combinados