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
        
        if(+movieDetails.imdbRating>8.5){
            let recomendDiv=document.createElement("div");
            let recomendElement=document.createElement("img");
            recomendElement.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQRExIUFBISERESEhIaFxIRFxgUFBIaFxoYGxsbFxUcIiwkGx0pHhUXJTYlKS4wMzMzGiI7PjkxPSwyMz0BCwsLEA4QHhISHjUqIikwMjI0MjI2NTIyMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIANUA7QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADsQAAIBAgMEBwYFAgcBAAAAAAABAgMRBBIhBTFBkQYTIlFSYYEUFjJxocEjU3Kx0UJiMzRzdJKy8EP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIEAwUG/8QALxEBAAEDAQYFBQABBQAAAAAAAAECAxESBBMhMVGhFBVB4fBhYnGRsYEiM1LB8f/aAAwDAQACEQMRAD8A+zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAyDkxeOhSXblrwitZP0Imp0i8NPTvlL7I4XNptW5xVKJqiFhBW/eKfghzY94p+CHNnHzCx17SrvKVkBW/eKf5cObHvFPwQ5seYWOvaTeUrICt+8U/BDmx7xT8EObHmFjr2k3lKyArfvFPwQ5se8U/y4c2PMLHXtJvKVkBW/eKfghzY94p/lw5seYWOvaTeUrICt+8U/y4c2PeKfghzY8wsde0m8pWQwVz3in+XDmzy+kU93Vwv83oPMLHXtJvKVhrVYwWaTUUuLInEbfgvgi5+b7K/kjadOri5tt9lPe/hgu5LvJrDbHpQteOd989V/x3HOL1+/8A7Uaaes+qM1VckZLpHP8ALhb5s3Ueka/rg0u+Lv8ARkz1EN2WNu6yObEbJoz3wUX3w7L+hbc7THGLmfzBprj1bsLjIVVeElLy3NfNM6Sn47Z1TCy6yEm4p/FHRx/Uu76E3sXaqrxyysqkd64Nd6OlnaJmrRcjFX9RTczOmrhKWBgya3UAAAAADh2pjlQhm3yekV3v+DuKj0kr5q2XhCK5vV/YzbXdm1bmY58oUuVaaco+rWlKTlJuUnvbPFzZgIKdSEZK8ZTSa70SOKo0pxxGSDpyw8lrmbU1drc93wnh02JuRNWf368Ms0RM8UVmFyU2nKjSeRUE5OEXnztWck+HobZ0MPDLTqRtKVJS65yeknuVi/heMxqjhz+fITpnPNDXFyVwtGlCFHrIOcq8ms17ZEnZWR7p7Mi44lJZp059h8bJJ2+wjZK56fIz/ERTVPz6ZQ9xckoYOKwjqtdqU45X3RzJbuZt2jsxRrUoQVoVOC4W+L6alfC16dX478k6asZ+cURcXJyphaUKuIvTUoU6cJKN2tXe+pq2dSpYmckqeRKm7LM5dq+8t4ScxTmMzMx+jROcZRFxclKGChko5o9uWIlGe/VLNp9DOMoUpQruEHTlQlFfE2ppu27gR4SrTnMfj/GUaZwiri5K7SdGi1DqU5OmnmztWbT4HR7JRcqdLq2pVKSlnUno7Ph6ExskzM0xVGY/vT5wTpnOMoCU7am/A4d1Jxgvim9X3Le+SOSrvUf7rFj6M0ryqT7kkvXV/sjnYtby5FH7Rb/1VJzDUY04qEVZRXPzNxrr1owi5TajFb2zzhsRCpFSg1KL+nk1wPpI0x/pj9Nf0byG29tTqYZYv8SS0/tXf/B27Rx0aFNzlv3Rj4nwRQcViZVJynJ3lJ6/wvIybXf0Rpp5z2cL93RGI5pvY+25uUaVROpGbUU98lfTXxI0bRoywdeMofDfND5f1Rf/ALuJXo5snq0qk1+JJdlP+hP7s2dK6Oagp8YSi/SWj/dHObVc2NVXOOMdfw56Kt1mrnHGEvh6qqQjOPwySa9TeQnRStnw6XglKP3+5Nm63Vrpirq1UVaqYkABdYAAApPSBWxE/PK1yS+xdit9KcG2o1Yq+XSVu7g/TXmY9utzXa4ek5cb8ZoQ2yX+PS/1ESu06zlSxGRRi4VrTyrWUbuzfncrtKq4SUou0ou6fczasZP8Ttf4vx6Ltb392ebbuxTRNE+uf58z9GWm5inHzkm9u4qa7CpwlF0o3m4tyV09zMbUwk6tSkoL/wCMXd3y6X4ka9s1nHK6nZatay3cjXHadVU+rU5ZLWtxt3X32L13qK5nVnE47enutNymc5Sqi3HA2TaUpXa1XxI7PaOr9pnwWJpqX6XlUvo2V3C7Sq0ouMJuMXw0aXyvuNaxU8soZnllLNJPXM+9veTG0U08Yzn2wReiPn0WLaFeM6NdQt1cJ0Yxtu0cW7er+h0Y/Hxg6yds8FF0777zjldvlv8AUqkMTJQlBPsSabWmrW79hiMTKrLPN5paa6cNxPi5xmOfD8ev8zGPwnfrTObjVxUklJxo0nZq6ej3ricWz8VOUq83BQkqDsoxcV2btOzIqG1KsZymp2nJRTdlqlu4GKu1Ksm253coOL0WsXvQ8RTmJiZ5z3yb6FkrzjJYWUd1SsperTv9UcVVNQx7aaTlCzfHtcOZCwx04xhFS7MJZorTsvX+We8VtGrVWWc3KN720S9Ut4q2mmqJn19sE3omPnTCZ27iprsqnGUZU43m03JXT3PgdEU/acM7Oyw+r4LSXEgpbZrOLi6nZata0d27uPMtrVnDJnaja1kktO69rk+Io1TM59P8Y9OZvqc5claXbX6mWnotLSouOaL+lvsVKpu81u9CY2BjlTqxu7Qmsr8nw+unqZ9lq0Xqap+ZVs1xFXF2dKY1M0W/8Lhbcpf3fYitm7Slh53WsH8UO9fZl5rUozi4ySlFqzTKNtnZssPO2soS+Gf2fma9qs12697TPt7L36aqJ1x/48bW2jLETzPSC0jHuXH1JHo3snrGq012YvsRfF9/yRxbE2W8TPW6pwtmfi/tTL1CCikkkklZJbkW2azNyreVq2Lc1zrqeiH6Tythqnm4Jf8AJfwyYKj0xxybhRi75Xmlbva7K+dnf1Rt2irTbmWi/Vpty7+h6/Ak++pK3JL7FhI7YmF6mhTg9JZby+b1f7kiWs06aIj6LWqdNER9AAHR0AAAPEopppq6a1T4nsAVHavR2UW5UVmj4L9qPyb3ogKkJQdpRlF90k1+59NPMop70n8zDc2Giqc0zhmr2ameMcHzHP5oxnPpjpR8MeSMOhHwx5I5eX/d291PCT17PmucxnPpPs0PDHkh7LDwx5IeX/d2PCT17Pm2cZz6T7LDwx5Ieyw8MeSJ8v8Au7e6PBz17Pm+cxnPpPssPDHkh7NDwx5Ijy/7u3unwk9ez5vmMZz6V7PDwx5Iz1EfDHkh5fP/AC7e54SevZ81zjOfTOqj4Y8h1UfCuQ8v+7seEnr2fM85iM8ul9H9GfTeqj4VyHVx8K5IeXfd2R4SevZXtibcTSp1XaSsoze6Xk33+fEnMTho1YuE1eMv/Jp8GQ+1ejsajc6byTeri/hl/DIZVcZhNLVMi4NKpD0fD6HWLldqNN2Mx1j/ALdN5Vb4VxmOq44TCxpQUIK0Y835t8WdBSveust8Kbffqvpc0VNp4zE9mCqWf5Ucq9Z8OZeNrt4xTE/pHireMUxP6WLbW3IUE4xalVa0itVHzl/BB9HNmSxFTr6l3FSum/65fwjo2Z0VbanXem/q4u9/1S+y5lrhBRSjFKKSsktEvkiaaKrlUVVxwjlCKaKrtUVXOERyh7RkA1NYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDIA19XHwx5I9oyAMAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRha8akITi7wnGMouzV4ySadnqtGjeRvR7/KYT/bUP+kSSAAAAAAABw7SxqoRUnGUlms2rKMFq3KcnpGKtvYHcCv4TbjuoVISzSrVIwksuWUVWlTWl9LdleZ4pdIJzacKKdOVSjFOUkpWqRcndX36AWMEFhukKqdXkoV/xJ5YOcHTUlknPMnO11am9196Nc+kDWSXVNU3RrTmnJdZCUHTSg48JfiJNPdddwFhBXMXt6Tp4lU6co1cPTqOeZxcacknl49u9k9P30O5bWi6MaqjJqpOMYQdoyk5TyK6fwa709Vx10AlQQVbpBGEsrpVPj6tWcO1NZLx36Wz793Zflfdgtrqq6i6ucZU4ZsuknJKVSLUVF6vNTkrcdAJcEbjcVUh1DjGOSdSEZ9ZdSip2SSiv6rvjutxI/EbWrweIWWjLq6cKkH2lFwcpqWqbzNKC8Ost1ldhYgQWMxeJjVqRpdVUUaTlkVOSnByajBOTqJTbtN2tHSG9XRyV9u1YKM2oukqcrz6px6yqnVTpr8RunZ046tTTzbwLQCsz29OnLq6kYSlCSlUqUoyyU6WWEpScXK97zUdG/FbgbMRtHErrFGNOShOKc4QlNU1ao5RcXUjnlFRhdpr492gFiBz4aqpwhNNSU4xakk0pJq6aT1W/cdAAAAAAAAAEb0e/ymE/21D/AKRJIAAAAAAAGivhoVVlnGM433TSkuTAA1T2bRkrSpU5LtaOCa7Us75ySl89Tytl0N3U0rJQVsi3Qd48nu7gAPcNn0ou8aVOLzOV1FLtNNN8pNerPD2ZRsl1NK0c6SyLRTVpc7K/fYADD2VQsl1FKyUklkVkpXcl63fM2zwNJqSdODUr5k4q0ndPVfNJ+hgAYWzKKeZUaSlaKvkV7Ry218skeS7jZSw0ItyjCMZNWbSSbV27X/VKT9QAMYjB06tuspxnkd450pZX3q+5mmey6DjOLo0nGo7zWRWm9X2lx1b5gAbvYqeVxyQyyUVJWVpWSSv32SXI1x2dRTTVKmnCNotRXZWui7lq+YAGFsqglFdTStCV4rIrRemq89FyR4jsjDpOKoUlFu7WRWbbbba77t82AB3RVrJaLuPYAAAAAAAAAH//2Q==";
            recomendDiv.append(recomendElement);
            posterDiv.append(nameElement,posterUrl,releaseDateRatingDiv,recomendDiv);
        }else{
            posterDiv.append(nameElement,posterUrl,releaseDateRatingDiv);
        }
        
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