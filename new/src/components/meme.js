import React,{useState,useEffect} from "react";


export default function Meme(){
  
   const [meme, setMeme] = useState({
     topText:"",
     bottomText :"",
     randomImage:"https://i.imgflip.com/30b1gx.jpg"

   })
   const [Allmeme,setAllmeme]=useState([])
   useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
     .then(res=>res.json())
     .then( neon =>setAllmeme(neon.data.memes))
   },[])


    function getMemeImage(){
        const RandomNumber = Math.floor(Math.random() * Allmeme.length)
        const Url = Allmeme[RandomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage:Url
        }))
        
    }
    function handleChange(event){
        const {name ,value}= event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name] : value 
        }))

    }
    return(
        <main>
            <div className="form">
                <input className="form--input" placeholder="TOP TEXT"
                name="topText"
                value={meme.topText}
                onChange={handleChange}

                >

                </input>
                <input className="form--input" placeholder="BOTTOM TEXT"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                >

                </input>
                <button
                 className="form--button"
                 onClick={getMemeImage}>
                    Get a new meme image  ʕ·͡ᴥ·ʔฅ
                 </button>
            </div>
                <div className="img_div">
                <img src={meme.randomImage} className="main_img" alt="faggot" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}