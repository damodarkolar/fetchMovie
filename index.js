var btn=document.querySelector("#searchForm");
btn.addEventListener("submit", search);


function posterPreparation(movieDetails){
    // event.preventDefault();
    document.querySelector("#poster").innerHTML="";
    var posterDiv=document.createElement("div");
    posterDiv.setAttribute("id","posterdiv");    
    if(movieDetails.Response==="False"){
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
        releaseDateElement.innerText="Release Year :"+movieDetails.Year;
    
        var ratingElement=document.createElement("p");
        ratingElement.innerText="Rating :"+movieDetails.imdbRating;
        
    
        releaseDateRatingDiv.append(releaseDateElement,ratingElement);
        posterDiv.append(nameElement,posterUrl,releaseDateRatingDiv);
        document.querySelector("#poster").append(posterDiv);
    }
}

        async function search(){
            event.preventDefault();
            var movieName=document.querySelector("#movieInput").value;
            try{
                var result=await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=3b49127f`);
                var data=await result.json();
                // console.log(data.Poster);
                posterPreparation(data);

            }catch(error){
                posterPreparation("error");
            }
        }