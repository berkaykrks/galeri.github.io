
const form = document.getElementById("car-form");
const titleElement= document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement= document.querySelector("#url");
const cardBody= document.querySelectorAll(".card-body")[1];
const clearCars = document.getElementById("clear-cars")




// UI Start
const ui = new UI();
 
//Storage Start
const storage = new Storage();


//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);

    document.addEventListener("DOMContentLoaded",function(){
        let cars= storage.getCarsStorage();
        
        ui.loadAllCars(cars); 
    });

    cardBody.addEventListener("click",deleteCar);
    clearCars.addEventListener("click",clearAllCars);

}


function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if(title === "" || price === "" || url === "")
    {
        //hata
        ui.displayMessages("Alanlar boş bırakılamaz","dark"); 
    }
    else{


        //araç ekle
        const newCar =  new Car(title,price,url);

        ui.addCarToUI(newCar); //arayüze araç ekleme

        storage.addCarToStorage(newCar);

        ui.displayMessages("Araç Başarıyla Eklenildi.","warning");
        
        
    }
    ui.clearInputs(titleElement,priceElement,urlElement);
    e.preventDefault();
    
}
function deleteCar(e)
{
    
    if(e.target.id==="delete-car")
    {
        ui.deleteCarFromUI(e.target);

        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi başarıyla gerçekleştirildi..." ,"success");
    }
    e.preventDefault();
}
function clearAllCars(){
    
    
    if(confirm("Bütün araçları silmek istediğinizden emin misiniz ?")){
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }
}