var btn=document.querySelector("#searchButton");
btn.addEventListener("click", posterPreparation);


function posterPreparation(event){
    event.preventDefault();
    document.querySelector("#poster").innerHTML="";

    // var movieName=document.querySelector("#movieInput");
    var posterDiv=document.createElement("div");
    posterDiv.setAttribute("id","posterdiv");

    
    var movieDetails=search();
    console.log(movieDetails)

    if(movieDetails==="error"){
        var errimage=document.createElement("img");
        errimage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOV2Ge2RDcQtkHTvWTdDqLwyJzHmzceKGFKw&usqp=CAU";
        errimage.setAttribute("style","width:100%")
        posterDiv.append(errimage);
        document.querySelector("#poster").append(posterDiv);
    }else{   
        var nameElement=document.createElement("h2");
        nameElement.innerText=movieDetails.Title;
    
        var posterUrl=document.createElement("img");
        posterUrl.src=movieDetails.Poster
    
        var releaseDateRatingDiv=document.createElement("div");
        releaseDateRatingDiv.setAttribute("id","releaseDateratingDiv");
    
        var releaseDateElement=document.createElement("p");
        releaseDateElement.innerText=movieDetails.Year;
    
        var ratingElement=document.createElement("p");
        ratingElement.innerText=movieDetails.imdbRating;
    
        releaseDateRatingDiv.append(releaseDateElement,ratingElement);
    
        posterDiv.append(nameElement,posterUrl,releaseDateElement);
        document.querySelector("#poster").append(posterDiv);
    }
}

        function search(){
            var movieName="rrr";
        var result= fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=3b49127f`)
        result.then(res=>{return res.json()})
        .then(data=>{return console.log("hai"+data)})
        .catch(err=>err)
        result((resolved, rejected){
            resolved("hai")
        })

        result.then((res)=>console.log(res)).catch((err)=>console.log(err))
        }

// async function search(){
//     var movie=document.querySelector("#movieName").value;
//    var a=await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=3b49127f`)
//    var ans=await a.json();
//    console.log(ans.Title);
// }